import React from 'react';

const PostButtons = ({id, editor, saveEditedPost, editBtn, setPromptRemove, loadImg, setLoading, setNewImg}) => {
    return (
        <div className="post-buttons">
            {editor &&
            <label htmlFor={id}
                   className="btn btn-post btn-downloader">
                    <span>Zdjęcie</span>
                <input id={id}
                       type='file'
                       accept="image/png, image/jpeg"
                       className='btn-hide'
                       onChange={e=>loadImg(e, setLoading, setNewImg)}/>
            </label>
            }

            <button className="btn btn-post"
                    onClick={e=>saveEditedPost(e)}>{editBtn}</button>

            {editor &&
            <button className="btn btn-post alert"
                    onClick={()=>setPromptRemove(true)}>Usuń</button>}
        </div>
    );
};

export default PostButtons;