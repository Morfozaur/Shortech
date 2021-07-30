import React, {useState} from 'react';
import PostContentMain from "./PostContentMain";
import PostDate from "./PostDate";
import PostContentEditor from "./PostContentEditor";

const Post = ({title, text, img, tags, highlight, date, updatePost}) => {
    const [editor, setEditor] = useState(false);
    const [postClass, setPostClass] = useState('post')
    const [editBtn, setEditBtn] = useState("Edytuj");
    const [textareaHeight, setTextareaHeight] = useState(0)

    const [newTitle, setNewTitle] = useState(title);
    const [newTags, setNewTags] = useState(tags);
    const [newText, setNewText] = useState(text);
    const [newDate, setNewDate] = useState(date);
    // console.log(title, text, img, tags, highlight)

    const changeEdit = (e) => {
        if (!editor) {
            const editHeight = e.target.parentElement.parentElement.querySelector('.post-text').offsetHeight +4;
            setTextareaHeight(editHeight);
        }
        e.preventDefault();
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
                        <PostDate date={date}/>
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
                                   setNewDate={setNewDate}
                                   textareaHeight={textareaHeight}/>}

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