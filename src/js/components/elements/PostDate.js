import React from 'react';


const PostDate = ({date}) => {
    const currDate = new Date(date).toLocaleString()
    const postDate = currDate;
    // console.log(postDate)
    return (
        <div className="post-content-bottom">
            <hr className='date-line'/>
            <div className="post-date">{postDate}</div>
        </div>
    );
}

export default PostDate;