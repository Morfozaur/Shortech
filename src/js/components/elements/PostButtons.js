import React from 'react';

const PostButtons = (editor, change, btn) => {
    return (
        <div className="post-buttons">
            {editor && <button className="btn btn-post">Zdjęcie</button>}
            <button className="btn btn-post" onClick={e=>change(e)}>{btn}</button>
            {editor && <button className="btn btn-post delete">Usuń</button>}
        </div>
    );
}

export default PostButtons;