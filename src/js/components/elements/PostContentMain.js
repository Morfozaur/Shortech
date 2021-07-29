import React from 'react';

const PostContentMain = ({title,tags, text}) => {
    return (
        <div className="post-content-main">
            <h3 className='post-title'>{title}</h3>
            <div className="tags">
                {tags.map((tag, idx) => <div key={idx+tag} className='tags-single'>{tag}</div>)}
            </div>
            <p className='post-text'>{text}</p>
        </div>
    );
}

export default PostContentMain;