import React from 'react';

const PostButtons = ({
                         id, editor, createPost,
                         saveEditedPost, editBtn, loadImg,
                         setPromptRemove, setLoading, setNewImg}) => {

    const deleteClass = "btn btn-post alert";
    const deactive = () => {
        if (!createPost) {setPromptRemove(true)}
    };
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
            <button className={createPost ? `${deleteClass} deactive` : deleteClass}
                    onClick={deactive}>Usuń</button>}
        </div>
    );
};

export default PostButtons;