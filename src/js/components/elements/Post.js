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
import classNames from "classnames";
import {setDoc, doc} from "firebase/firestore";

const Post = ({id, post, createPost, editorClass, addNew, setEndIndicator, isLogged, isDemo}) => {

    const [editor, setEditor] = useState(false);
    const [postClassEditor, setPostClassEditor] = useState(false);
    const [editBtn, setEditBtn] = useState(editorClass);
    const [textareaResizer, setTextareaResizer] = useState('');

    const [currPost, setCurrPost] = useState(post)
    const [newPost, setNewPost] = useState(post)
    const [errorsMsg, setErrorsMsg] = useState({title:false, tags: false, text: false, img: false})
    const [prompts, setPrompts] = useState({alert: false, remove: false, demo: false})


    const [loading, setLoading] = useState(0)
    const [tagClass, setTagClass] = useState(false);


    const setHighlight = (curr) => setNewPost({...newPost, highlight: !curr});
    const setNewImg = (newImg) => setNewPost({...newPost, img: newImg});
    const setPromptRemove = (val) => setPrompts({...prompts, remove: val})


    const dispatch = useDispatch();
    let postsNumber = useSelector(state => state.postsNumber)

    useEffect(()=> {
        if(createPost) {
            setEditor(true);
            setPostClassEditor(true);
        }
    },[createPost])

    useEffect(()=> {
        if (editor && textareaResizer) {
            const textarea = textareaResizer.querySelectorAll('textarea');
            textarea.forEach(el => autosize.update(el))
        }
    },[textareaResizer, editor])

    const verifyPost = () => {
        const imgChck = 'https://firebasestorage.googleapis.com/v0/b/shortech';
        const errors = {...errorsMsg}
        newPost.title.length < 5 ? errors.title = true : errors.title = false;
        newPost.text.length < 30 ? errors.text = true : errors.text = false;
        newPost.tags.length < 1 ? errors.tags = true : errors.tags = false;
        !newPost.img.includes(imgChck) ? errors.img = true : errors.img = false;
        setErrorsMsg(errors);
        for (let msg in errors) {
            if (errors[msg] === true) {return false;}
        }
        return true;
    }

    const modifyButtons = (e) => {
        setEditor(!editor);
        (editBtn === 'Edytuj') ? setEditBtn('Zapisz') : setEditBtn('Edytuj');
        setPostClassEditor(prev=>!prev)
        setTextareaResizer(e.target.parentElement.parentElement);
    };

    const cancelEdition = () => {
        setEditor(!editor);
        (editBtn === 'Edytuj') ? setEditBtn('Zapisz') : setEditBtn('Edytuj');
        setPostClassEditor(prev=>!prev);
        setPrompts({...prompts, alert: false, remove: false})
        if (createPost) {
            addNew()
        } else {
            setNewPost({
                title: currPost.title,
                text: currPost.text,
                tags: currPost.tags,
                img: currPost.img,
                highlight: currPost.highlight,
            })
        }
    }

    const updateHTML = (e) => {
        setCurrPost({
            title: newPost.title,
            text: newPost.text,
            tags: newPost.tags,
            img: newPost.img,
            highlight: newPost.highlight,
        })
        modifyButtons(e);
        setPrompts({...prompts, alert:false, remove: false})
        if (createPost && isLogged) {
            window.location.reload();
        }
    };

    const pushToFirebase = (e) => {
        const postObj = {
            title: newPost.title,
            tags: newPost.tags,
            text: newPost.text,
            img: newPost.img,
            highlight: newPost.highlight
        }
        if (createPost) {
            postObj.date = customDate();
            createInFirebase(postObj)
                .then(()=> {
                    updateHTML(e, post);
                    postsNumber += 1;
                    dispatch(fetchPostsNumber(postsNumber));
                    setDoc(doc(db, 'count', 'posts'), {number: postsNumber})
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
            setPrompts({...prompts, demo: true})
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
                setPrompts({...prompts, alert: true})
            }
        }
    };

    const loadImg = (e) => {
        e.preventDefault();
        if (isLogged) {
            uploadImg(e, setLoading, setNewImg);
        } else if (isDemo) {
            setNewImg(randomImg())
        }
    };

    return (
        <>
            <div className={classNames('post',{'in-editor': postClassEditor}, {'highlighted': newPost.highlight})}>
                <div className='post-wrapper'>
                <PostContent currPost={currPost} newPost={newPost} setNewPost={setNewPost}
                             editor={editor} createPost={createPost}
                             date={currPost.date} tagClass={tagClass} setTagClass={setTagClass}
                             setEndIndicator={setEndIndicator}/>

                <PostImage img={newPost.img}
                           editor={editor}
                           loading={loading}
                           highlight={newPost.highlight}
                           setHighlight={setHighlight}/>

                </div>

                {(isLogged || isDemo) &&
                <PostButtons id={id} editor={editor} editBtn={editBtn}
                             saveEditedPost={saveEditedPost}
                             setPromptRemove={setPromptRemove}
                             loadImg={loadImg} isDemo={isDemo}
                             createPost={createPost}/>}

                {editor &&
                <i className="fas fa-times-circle fa-lg cancel"
                   onClick={cancelEdition}/>}

                {(prompts.alert || prompts.remove || prompts.demo) &&
                <PromptSection id={id} isDemo={isDemo} errorsMsg={errorsMsg}
                               prompts={prompts} setPromptRemove={setPromptRemove}/>}
            </div>
        </>
    );
};

export default Post;