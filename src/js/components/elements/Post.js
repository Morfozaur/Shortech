import React, {useState, useEffect} from 'react';
import PostContentMain from "./PostContentMain";
import PostDate from "./PostDate";
import PostContentEditor from "./PostContentEditor";
import autosize from "autosize/dist/autosize";
import {useDispatch} from "react-redux";
import {switchTag} from "../../redux/actions/switchTag";
import Alert from "./Alert";
import {createInFirebase, updateInFirebase} from "../../firebaseFunc";

const Post = ({
                  id,
                  title,
                  text,
                  img,
                  tags,
                  highlight,
                  date,
                  createPost,
                  editorClass,
                  addNew}) => {

    const [editor, setEditor] = useState(false);
    const [postClass, setPostClass] = useState('post');
    const [editBtn, setEditBtn] = useState(editorClass);
    const [textareaResizer, setTextareaResizer] = useState('');

    const [alert, setAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    const [currTitle, setCurrTitle] = useState(title);
    const [currTags, setCurrTags] = useState(tags);
    const [currText, setCurrText] = useState(text);

    const [newTitle, setNewTitle] = useState(title);
    const [newTags, setNewTags] = useState(tags);
    const [newText, setNewText] = useState(text);
    const [tagClass, setTagClass] = useState('');

    const [titleErr, setTitleErr] = useState(false);
    const [tagsErr, setTagsErr] = useState(false);
    const [textErr, setTextErr] = useState(false);
    const [imgErr, setImgErr] = useState(false);



    // Open new post editor
    useEffect(()=> {
        if(createPost) {
            setEditor(true);
            setPostClass('post in-editor');
        }
    },[createPost])


    // Update autosize
    useEffect(()=> {
        if (editor && textareaResizer) {
            const textArea = textareaResizer.querySelector('textarea');
            autosize.update(textArea);
        }
    },[textareaResizer, editor])


    // Post edition

    const verify = () => {
        let pass = true;

        if (newTitle < 5) { setTitleErr(true); pass = false}
        else { setTitleErr(false)}

        if (newText < 30) { setTextErr(true); pass = false}
        else { setTextErr(false)}

        if (newTags.length < 1) { setTagsErr(true); pass = false }
        else { setTagsErr(false)}

        return pass
    }

    const modifyButtons = (e) => {
        setEditor(!editor);
        (editBtn === 'Edytuj') ? setEditBtn('Zapisz') : setEditBtn('Edytuj');
        (postClass === 'post') ? setPostClass('post in-editor') : setPostClass('post')
        setTextareaResizer(e.target.parentElement.parentElement);
    };

    const cancelEdition = () => {
        setEditor(!editor);
        (editBtn === 'Edytuj') ? setEditBtn('Zapisz') : setEditBtn('Edytuj');
        (postClass === 'post') ? setPostClass('post in-editor') : setPostClass('post');
        if (createPost) {addNew()}
        setAlert(false);
        if (!createPost) {
            setNewTitle(title);
            setNewText(text);
            setNewTags(tags);
        }
    }

    const updateHTML = (e) => {
        setCurrTitle(newTitle);
        setCurrTags(newTags);
        setCurrText(newText);
        modifyButtons(e);
        setAlert(false)
    };

    const saveEditedPost = (e) => {
        e.preventDefault();
        if (!editor) {
            modifyButtons(e);
        } else {

            if (verify()) {
                const postObj = {
                    title: newTitle,
                    tags: newTags,
                    text: newText,
                    isNew: createPost
                }
                if (createPost) {
                    postObj.date = new Date;
                    createInFirebase(postObj)
                        .then(()=> {
                            updateHTML(e)
                        })
                        .catch(err => {
                        console.error(err)
                    });
                } else {
                    updateInFirebase(id, postObj)
                        .then(()=> {
                            updateHTML(e)
                        })
                        .catch(err => {
                            console.error(err)
                        });
                }
            } else {
                setAlert(true)
            }
        }

    };




    return (
        <>
            {alert &&
            <Alert title={titleErr} tags={tagsErr} text={textErr} img={imgErr}/>}
            <div className={highlight ? `${postClass} highlighted` : `${postClass}`}>
                <div className="post-content">
                    {!editor && (
                        <>
                            <PostContentMain title={currTitle}
                                             tags={currTags}
                                             text={currText}/>

                        </>
                    )}

                    {editor &&

                    <PostContentEditor newTitle={newTitle}
                                       setNewTitle={setNewTitle}
                                       newTags={newTags}
                                       setNewTags={setNewTags}
                                       newText={newText}
                                       setNewText={setNewText}
                                       tagClass={tagClass}
                                       setTagClass={setTagClass}/>}
                    <PostDate date={date} set={createPost}/>
                </div>
                <div className='post-img'>
                    <div className="post-img-file" style={{backgroundImage: `url(${img})`}}/>
                </div>
                <div className="post-buttons">
                    {editor && <button className="btn btn-post">Zdjęcie</button>}
                    <button className="btn btn-post" onClick={e=>saveEditedPost(e)}>{editBtn}</button>
                    {editor && <button className="btn btn-post delete">Usuń</button>}
                </div>
                {editor &&
                <i className="fas fa-times-circle fa-lg cancel" onClick={cancelEdition}/>}
            </div>
        </>
    );
}

export default Post