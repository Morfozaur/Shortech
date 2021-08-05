import React from 'react';

const PostImage = ({img, editor, loading}) => {
    return (
        <div className='post-img'>
            {(editor && loading > 0) &&
            <p className='post-img-loading'>Wczytywanie: {loading}%</p>}
            <div className="post-img-file" style={{backgroundImage: `url(${img})`}}/>
        </div>
    );
}

export default PostImage;