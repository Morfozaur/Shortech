import React from 'react';

const PostImage = ({img, editor, loading, highlight}) => {
    const star = 'highlighted-star fa-star'
    return (
        <div className='post-img'>
            <i className={highlight ? `${star} fas` : `${star} far`}/>
            {(editor && loading > 0) &&
            <p className='post-img-loading'>Wczytywanie: {loading}%</p>}
            <div className="post-img-file" style={{backgroundImage: `url(${img})`}}/>
        </div>
    );
}

export default PostImage;