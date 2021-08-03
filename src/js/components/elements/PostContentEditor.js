import React, {useState, useEffect} from 'react';
import Tag from "./Tag";
import {useSelector} from "react-redux";

const PostContentEditor = ({
                               newTitle, setNewTitle,
                               newTags, setNewTags,
                               newText, setNewText,}) => {

    const [tagActivator, setTagActivator] = useState(false);

    const currPostsNum = useSelector(state => state.count)

    const changeTitle = (e) => {
        setNewTitle(e.target.value)
    };

    // const deleteTag = () => {
    //
    // }

    const addTag = () => {
            setTagActivator(!tagActivator)
    }

    useEffect(()=> {
         if (tagActivator) {
             document.querySelector('.tag-input').focus()
         }
    }, [tagActivator])

    const changeText = (e) => {
        e.target.style.height = e.target.scrollHeight + 'px'
        // console.log(e.target)
        setNewText(e.target.value)
    };

    return (
        <div className="post-content-main">

            <form className='post-editor'>
                <div className="post-editor-header">
                    <input type="text"
                           className='post-editor-title'
                           value={newTitle}
                           onChange={e=>changeTitle(e)}/>
                </div>
                <div className="tags">
                    {newTags.map((tag, idx) => <Tag key={newTitle+tag+idx} tag={tag} idx={idx} edit={true}/>)}
                    <div className='add-tag'>{tagActivator && <input type="text" className="tag-input"/>}<i className="fas fa-plus-circle add-tag-ico" onClick={e=>addTag(e)}/></div>
                </div>
                <textarea className='post-editor-text'
                          value={newText}
                          onChange={e=>changeText(e)} is="auto-size"/>
            </form >

        </div>
    );
}

export default PostContentEditor;