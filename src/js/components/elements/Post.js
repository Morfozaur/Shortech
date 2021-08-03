import React, {useState, useEffect} from 'react';
import PostContentMain from "./PostContentMain";
import PostDate from "./PostDate";
import PostContentEditor from "./PostContentEditor";
import autosize from "autosize/dist/autosize";

const Post = ({title, text, img, tags, highlight, date, createPost, updatePost}) => {
    const [editor, setEditor] = useState(false);
    const [postClass, setPostClass] = useState('post')
    const [editBtn, setEditBtn] = useState("Edytuj");
    const [currTextarea, setCurrTextarea] = useState('')

    const [newTitle, setNewTitle] = useState(title);
    const [newTags, setNewTags] = useState(tags);
    const [newText, setNewText] = useState(text);
    const [newDate, setNewDate] = useState(date);
    // console.log(title, text, img, tags, highlight)

    useEffect(()=> {
        if(createPost) {
            setEditor(true);
            setPostClass('post in-editor');
        }
    },[createPost])

    useEffect(()=> {
        if (editor && currTextarea) {
            console.log(currTextarea)
            const textArea = currTextarea.querySelector('textarea');
            autosize.update(textArea);
        }
    },[currTextarea, editor])

    const changeEdit = (e) => {
        e.preventDefault();
        setCurrTextarea(e.target.parentElement.parentElement);
        setEditor(!editor);
        (editBtn === 'Edytuj') ? setEditBtn('Zapisz') : setEditBtn('Edytuj');
        (postClass === 'post') ? setPostClass('post in-editor') : setPostClass('post');
    };

    return (
        <div className={highlight ? `${postClass} highlighted` : `${postClass}`}>
            <div className="post-content">
                {!editor && (
                    <>
                        <PostContentMain title={title} tags={tags} text={text}/>

                    </>
                )}
                {editor &&
                <PostContentEditor newTitle={newTitle}
                                   setNewTitle={setNewTitle}
                                   newTags={newTags}
                                   setNewTags={setNewTags}
                                   newText={newText}
                                   setNewText={setNewText}
                                   newDate={newDate}
                                   setNewDate={setNewDate}/>}
                <PostDate date={date}/>
            </div>
            <div className='post-img'>
                <div className="post-img-file" style={{backgroundImage: `url(${img})`}}/>
            </div>
            <div className="post-buttons">
                {editor && <button className="btn btn-post">Zdjęcie</button>}
                <button className="btn btn-post" onClick={e=>changeEdit(e)}>{editBtn}</button>
                {editor && <button className="btn btn-post delete">Usuń</button>}
            </div>
        </div>
    );
}

export default Post