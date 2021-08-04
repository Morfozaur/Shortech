import React from 'react';
import {customDate} from "../../customDate";


const PostDate = ({date, createPost}) => {
    let postDate = ''
    if (createPost === false) {
        postDate = new Date(date).toLocaleString().slice(0, -3);
    }
    return (
        <div className="post-content-bottom">
            <hr className='date-line'/>
            <div className="post-date">{postDate}</div>
        </div>
    );
}

export default PostDate;