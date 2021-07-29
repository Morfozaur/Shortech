import React from 'react';
import Tag from "./Tag";

const PostContentMain = ({title,tags, text}) => {


    return (
        <div className="post-content-main">
            <h3 className='post-title'>{title}</h3>
            <div className="tags">
                {tags.map((tag, idx) => <Tag key={title+tag+idx} tag={tag} idx={idx}/>)}
            </div>
            <p className='post-text'>{text}</p>
        </div>
    );
}

export default PostContentMain;