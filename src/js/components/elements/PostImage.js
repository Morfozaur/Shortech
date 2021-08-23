import React from 'react';
import classNames from "classnames";

const PostImage = ({img, editor, loading, highlight, setHighlight}) => {

    return (
        <div className='post-img'>
            {editor &&
            <i className={classNames('highlighted-star fa-star', {'fas': highlight}, {'far': !highlight})}
               onClick={()=>setHighlight(highlight)}/>}
            {(editor && loading > 0) &&
            <p className='post-img-loading'>Wczytywanie: {loading}%</p>}
            <div className="post-img-file" style={{backgroundImage: `url(${img})`}}/>
        </div>
    );
}

export default PostImage;