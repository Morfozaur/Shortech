import React from 'react';

const PostImage = ({
                       img, editor, loading,
                       webHighlight, setWebHighlight}) => {
    const star = 'highlighted-star fa-star'

    const starHighlight = () => {
        setWebHighlight(curr => !curr);
    };
    return (
        <div className='post-img'>
            <i className={webHighlight ? `${star} fas` : `${star} far`} onClick={starHighlight}/>
            {(editor && loading > 0) &&
            <p className='post-img-loading'>Wczytywanie: {loading}%</p>}
            <div className="post-img-file" style={{backgroundImage: `url(${img})`}}/>
        </div>
    );
}

export default PostImage;