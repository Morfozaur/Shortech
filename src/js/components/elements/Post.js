import React, {useState, useEffect} from 'react';
import autosize from "autosize/dist/autosize";

import {createInFirebase, updateInFirebase, uploadImg} from "../../firebaseFunc";
import {customDate} from "../../customDate";
import PostButtons from "./PostButtons";
import PostImage from "./PostImage";
import PostContent from "./PostContent";
import PromptSection from "./PromptSection";
import {randomImg} from "../../randomImg";
import {useDispatch, useSelector} from "react-redux";
import {db} from "../../firebase";
import {fetchPostsNumber} from "../../redux/actions/allFetchers";

const Post = ({
                  id, title, text, img, tags, highlight, date,
                  createPost, editorClass, addNew, setEndIndicator, isLogged, isDemo
}) => {

    const [editor, setEditor] = useState(false);
    const [postClass, setPostClass] = useState('post');
    const [editBtn, setEditBtn] = useState(editorClass);
    const [textareaResizer, setTextareaResizer] = useState('');

    const [promptAlert, setPromptAlert] = useState(false);
    const [promptRemove, setPromptRemove] = useState(false);
    const [promptDemo, setPromptDemo] = useState(false);

    const [currTitle, setCurrTitle] = useState(title);
    const [currTags, setCurrTags] = useState(tags);
    const [currText, setCurrText] = useState(text);
    const [currImg, setCurrImg] = useState(img);
    const [sourceHighlight, setSourceHighlight] = useState(highlight);

    const [newTitle, setNewTitle] = useState(title);
    const [newTags, setNewTags] = useState(tags);
    const [newText, setNewText] = useState(text);
    const [newImg, setNewImg] = useState(img);
    const [webHighlight, setWebHighlight] = useState(highlight)

    const [loading, setLoading] = useState(0)
    const [tagClass, setTagClass] = useState('');

    const [titleErr, setTitleErr] = useState(false);
    const [tagsErr, setTagsErr] = useState(false);
    const [textErr, setTextErr] = useState(false);
    const [imgErr, setImgErr] = useState(false);

    const dispatch = useDispatch();
    let postsNumber = useSelector(state => state.postsNumber)

    useEffect(()=> {
        if(createPost) {
            setEditor(true);
            setPostClass('post in-editor');
        }
    },[createPost])

    useEffect(()=> {
        if (editor && textareaResizer) {
            const textarea = textareaResizer.querySelectorAll('textarea');
            textarea.forEach(el => autosize.update(el))
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
        setPromptAlert(false);
        setPromptRemove(false);
        if (createPost) {
            addNew()
        } else {
            setNewTitle(currTitle);
            setNewText(currText);
            setNewTags(currTags);
            setNewImg(currImg);
            setWebHighlight(sourceHighlight)
        }
    }

    const updateHTML = (e) => {
        setSourceHighlight(webHighlight)
        setCurrTitle(newTitle);
        setCurrTags(newTags);
        setCurrText(newText);
        setCurrImg(newImg);
        modifyButtons(e);
        setPromptAlert(false);
        setPromptRemove(false);
        if (createPost && isLogged) {
            window.location.reload();
        }
    };

    const pushToFirebase = (e) => {
        const postObj = {
            title: newTitle,
            tags: newTags,
            text: newText,
            img: newImg,
            highlight: webHighlight,
            isNew: createPost
        }
        if (createPost) {
            postObj.date = customDate();
            createInFirebase(postObj)
                .then(()=> {
                    updateHTML(e);
                    postsNumber += 1;
                    dispatch(fetchPostsNumber(postsNumber));
                    const updateNumber = db.collection('count').doc('posts');
                    updateNumber.set({number: postsNumber});
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
    };

    const pushToDemo = (e) => {
        if (createPost) {
            setPromptDemo(true);
        } else {
            updateHTML(e);
        }
    };

    const saveEditedPost = (e) => {
        e.preventDefault();
        if (!editor) {
            modifyButtons(e);
        } else {
            if (verifyPost()) {
                if (isLogged) {
                    pushToFirebase(e)
                } else if (isDemo) {
                    pushToDemo(e)
                }
            } else {
                setPromptAlert(true);
            }
        }
    };

    const loadImg = (e) => {
        e.preventDefault();
        if (isLogged) {
            uploadImg(e, setLoading, setNewImg);
        } else if (isDemo) {
            setNewImg(randomImg)
        }
    };

    return (
        <>
            <div className={webHighlight ? `${postClass} highlighted` : `${postClass}`}>
                <div className='post-wrapper'>
                <PostContent editor={editor} date={date} createPost={createPost}
                             currTitle={currTitle} newTitle={newTitle} setNewTitle={setNewTitle}
                             currTags={currTags} newTags={newTags} setNewTags={setNewTags}
                             tagClass={tagClass} setTagClass={setTagClass}
                             currText={currText} newText={newText} setNewText={setNewText}
                             setEndIndicator={setEndIndicator}/>

                <PostImage img={newImg}
                           editor={editor}
                           loading={loading}
                           webHighlight={webHighlight}
                           setWebHighlight={setWebHighlight}/>

                </div>

                {(isLogged || isDemo) &&
                <PostButtons id={id}
                             editor={editor}
                             saveEditedPost={saveEditedPost}
                             editBtn={editBtn}
                             setPromptRemove={setPromptRemove}
                             loadImg={loadImg} isDemo={isDemo}
                             createPost={createPost}/>}

                {editor &&
                <i className="fas fa-times-circle fa-lg cancel"
                   onClick={cancelEdition}/>}

                {(promptAlert || promptRemove || promptDemo) &&
                <PromptSection id={id} promptAlert={promptAlert} isDemo={isDemo}
                               promptRemove={promptRemove} setPromptRemove={setPromptRemove}
                               titleErr={titleErr} tagsErr={tagsErr}
                               textErr={textErr} imgErr={imgErr} promptDemo={promptDemo}/>}
            </div>
        </>
    );
};

export default Post;