import React from 'react';


const PostDate = ({date}, createPost) => {
    let postDate = ''
    if (!createPost) {
        postDate = new Date(date).toLocaleString()
    }
    return (
        <div className="post-content-bottom">
            <hr className='date-line'/>
            <div className="post-date">{postDate}</div>
        </div>
    );
}

export default PostDate;