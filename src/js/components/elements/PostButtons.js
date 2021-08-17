import React from 'react';

const PostButtons = ({
                         isDemo, id, editor, createPost,
                         saveEditedPost, editBtn, loadImg,
                         setPromptRemove}) => {

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
                {!isDemo &&
                <input id={id}
                       type='file'
                       accept="image/jpeg"
                       className='btn-hide'
                       onChange={e=>loadImg(e)}/>}
                {isDemo &&
                <input id={id}
                       type='file'
                       accept="image/png, image/jpeg"
                       className='btn-hide'
                       onClick={e=>loadImg(e)}/>}
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