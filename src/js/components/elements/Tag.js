import React from 'react';


const Tag = ({idx, tag, edit, handleClick}) => {

    return (
        <div key={idx+tag}
             className={edit ? 'tags-single delete' : 'tags-single'}
             onClick={handleClick}>{tag}</div>
    );
}

export default Tag;