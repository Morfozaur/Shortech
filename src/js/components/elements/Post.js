import React, {useState, useEffect} from 'react';
import autosize from "autosize/dist/autosize";
import firebase from "firebase";

import Alert from "./Alert";
import {createInFirebase, updateInFirebase, uploadImg} from "../../firebaseFunc";
import PromptRemove from "./PromptRemove";
import {customDate} from "../../customDate";
import PostButtons from "./PostButtons";
import PostImage from "./PostImage";
import PostContent from "./PostContent";

const Post = ({
                  id, title, text, img, tags, highlight, date,
                  createPost, editorClass, addNew
}) => {

    const [editor, setEditor] = useState(false);
    const [postClass, setPostClass] = useState('post');
    const [editBtn, setEditBtn] = useState(editorClass);
    const [textareaResizer, setTextareaResizer] = useState('');

    const [alert, setAlert] = useState(false);

    const [currTitle, setCurrTitle] = useState(title);
    const [currTags, setCurrTags] = useState(tags);
    const [currText, setCurrText] = useState(text);

    const [newTitle, setNewTitle] = useState(title);
    const [newTags, setNewTags] = useState(tags);
    const [newText, setNewText] = useState(text);
    const [newImg, setNewImg] = useState(img);
    const [loading, setLoading] = useState(0)
    const [tagClass, setTagClass] = useState('');

    const [promptRemove, setPromptRemove] = useState(false);

    const [titleErr, setTitleErr] = useState(false);
    const [tagsErr, setTagsErr] = useState(false);
    const [textErr, setTextErr] = useState(false);
    const [imgErr, setImgErr] = useState(false);

    useEffect(()=> {
        if(createPost) {
            setEditor(true);
            setPostClass('post in-editor');
        }
    },[createPost])

    useEffect(()=> {
        if (editor && textareaResizer) {
            const textArea = textareaResizer.querySelector('textarea');
            autosize.update(textArea);
        }
    },[textareaResizer, editor])

    const verifyPost = () => {
        let pass = true;

        if (newTitle < 5) {setTitleErr(true); pass = false}
        else {setTitleErr(false)}

        if (newText < 30) {setTextErr(true); pass = false}
        else {setTextErr(false)}

        if (newTags.length < 1) {setTagsErr(true); pass = false }
        else {setTagsErr(false)}

        if (!newImg.includes('https://firebasestorage.googleapis.com/v0/b/shortech')) {setImgErr(true); pass = false }
        else {setImgErr(false)}

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
        setAlert(false);
        setPromptRemove(false);
        if (createPost) {
            addNew()
        } else {
            setNewTitle(title);
            setNewText(text);
            setNewTags(tags);
            setNewImg(img)
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

            if (verifyPost()) {
                const postObj = {
                    title: newTitle,
                    tags: newTags,
                    text: newText,
                    img: newImg,
                    isNew: createPost
                }
                if (createPost) {
                    postObj.date = customDate()
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

    const loadImg = (e, setLoading) => {
        e.preventDefault();
        uploadImg(e, setLoading, setNewImg);
    };

    return (
        <>
            {alert &&
            <Alert title={titleErr} tags={tagsErr} text={textErr} img={imgErr}/>}
            <div className={highlight ? `${postClass} highlighted` : `${postClass}`}>

                <PostContent editor={editor} date={date} createPost={createPost}
                             currTitle={currTitle} newTitle={newTitle} setNewTitle={setNewTitle}
                             currTags={currTags} newTags={newTags} setNewTags={setNewTags}
                             tagClass={tagClass} setTagClass={setTagClass}
                             currText={currText} newText={newText} setNewText={setNewText}/>

                <PostImage img={newImg} editor={editor} loading={loading}/>

                <PostButtons id={id}
                             editor={editor}
                             saveEditedPost={saveEditedPost}
                             editBtn={editBtn}
                             setPromptRemove={setPromptRemove}
                             loadImg={loadImg}
                             setLoading={setLoading}
                             setNewImg={setNewImg}/>

                {editor &&
                <i className="fas fa-times-circle fa-lg cancel"
                   onClick={cancelEdition}/>}

            </div>
            {promptRemove &&
            <PromptRemove id={id} setPromptRemove={setPromptRemove}/>}
        </>
    );
}

export default Post;