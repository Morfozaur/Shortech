import React, {useState, useEffect} from 'react';
import Tag from "./Tag";
import classNames from "classnames";

const PostContentEditor = ({newPost, setNewPost,tagClass, setTagClass}) => {
    const [tagActivator, setTagActivator] = useState(false);
    const [tagToAdd, setTagToAdd] = useState('');

    const changeTitle = (e) => {
        e.target.style.height = e.target.scrollHeight + 'px';
        setNewPost({...newPost, title:e.target.value});
    };

    const changeText = (e) => {
        e.target.style.height = e.target.scrollHeight + 'px'
        setNewPost({...newPost, text:e.target.value})
    };

    // Tags actions

    const changeTag = (e) => {
        setTagToAdd(e.target.value);
    }

    const deleteTag = (e) => {
        const out = e.target.innerHTML
        const arr = newPost.tags.filter((tag) => tag !== out)
        setNewPost({...newPost, tags:arr})
    }

    const addTag = () => {
        setTagActivator(!tagActivator);
        setTagClass(!tagClass);
        if (tagToAdd.length>0) {
            const toLower = tagToAdd.toLowerCase();
            const checker = toLower.split(",");
            checker.forEach(tag => {
                const unspaceTag = tag.replace(/\s{2,}/g, ' ')
                const clearTag = unspaceTag.trim();
                if (!newPost.tags.includes(clearTag) && clearTag.length>0) {
                    const newTags = [...newPost.tags, clearTag];
                    setNewPost({...newPost, tags:newTags});

                }
            })
        }
        setTagToAdd('')
    }

    const sendTag = (e) => {
        e.preventDefault();
        addTag();
    };

    useEffect(()=> {
         if (tagActivator) {document.querySelector('.tag-input').focus()}
    }, [tagActivator])




    return (
        <div className="post-content-main">

            <form className='post-editor' onSubmit={e=>sendTag(e)}>
                <div className="post-editor-header">
                    <textarea
                           class='post-editor-title'
                           value={newPost.title}
                           onChange={e=>changeTitle(e)} is="auto-size"/>
                </div>
                <div className="tags">
                    {newPost.tags.map((tag, idx) => {
                        return <Tag key={newPost.title+tag+idx}
                                    tag={tag}
                                    idx={idx}
                                    edit={true}
                                    handleClick={deleteTag}/>
                    })}
                    <div className='add-tag'>
                        {tagActivator &&
                        <input type="text"
                               className="tag-input"
                               value={tagToAdd}
                               onChange={e=>changeTag(e)}/>}
                        <i className={classNames('fas fa-plus-circle add-tag-ico', {'add-tag-new' :tagClass})} onClick={e=>addTag(e)}/>
                    </div>
                </div>
                <textarea className='post-editor-text'
                          value={newPost.text}
                          onChange={e=>changeText(e)} is="auto-size"/>
            </form >

        </div>
    );
}

export default PostContentEditor;