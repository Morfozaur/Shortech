import React from 'react';

const PostDate = ({date}) => {
    return (
        <div className="post-content-bottom">
            <hr className='date-line'/>
            <div className="post-date">{date}</div>
        </div>
    );
}

export default PostDate;