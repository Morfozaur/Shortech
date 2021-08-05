import React, {useState, useEffect} from 'react';
import Tag from "./Tag";

const PostContentEditor = ({
                               newTitle, setNewTitle,
                               newTags, setNewTags,
                               newText, setNewText,
                               tagClass, setTagClass
                           }) => {


    const [tagActivator, setTagActivator] = useState(false);
    const [tagToAdd, setTagToAdd] = useState('');

    const changeTitle = (e) => {
        e.target.style.height = e.target.scrollHeight + 'px'
        setNewTitle(e.target.value)
    };

    const changeText = (e) => {
        e.target.style.height = e.target.scrollHeight + 'px'
        setNewText(e.target.value)
    };

    // Tags actions

    const changeTag = (e) => {
        setTagToAdd(e.target.value);
    }

    const deleteTag = (e) => {
        const out = e.target.innerHTML
        const arr = newTags.filter((tag) => tag !== out)
        setNewTags(arr);
    }

    const addTag = () => {
        setTagActivator(!tagActivator);
        tagClass === '' ? setTagClass( ' add-tag-new') : setTagClass('');
        if (tagToAdd.length>0) {
            const checker = tagToAdd.toLowerCase();
            console.log(checker)
            if (!newTags.includes(checker)) {
                setNewTags(tags => [...tags, checker])
                console.log(newTags)
            }
        }
        setTagToAdd('')
    }

    useEffect(()=> {
         if (tagActivator) {document.querySelector('.tag-input').focus()}
    }, [tagActivator])




    return (
        <div className="post-content-main">

            <form className='post-editor'>
                <div className="post-editor-header">
                    <textarea
                           class='post-editor-title'
                           value={newTitle}
                           onChange={e=>changeTitle(e)} is="auto-size"/>
                </div>
                <div className="tags">
                    {newTags.map((tag, idx) => {
                        return <Tag key={newTitle+tag+idx}
                                    tag={tag}
                                    idx={idx}
                                    edit={true}
                                    handleClick={deleteTag}/>
                    })}
                    <div className='add-tag'>
                        {tagActivator &&
                        <input type="text"
                               class="tag-input"
                               value={tagToAdd}
                               onChange={e=>changeTag(e)}/>}
                        <i className={`fas fa-plus-circle add-tag-ico${tagClass}`} onClick={e=>addTag(e)}/>
                    </div>
                </div>
                <textarea className='post-editor-text'
                          value={newText}
                          onChange={e=>changeText(e)} is="auto-size"/>
            </form >

        </div>
    );
}

export default PostContentEditor;