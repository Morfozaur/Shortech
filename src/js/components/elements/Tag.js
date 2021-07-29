import React from 'react';

const Tag = ({idx, tag, edit}) => {

    return (
        <div key={idx+tag} className={edit ? 'tags-single delete' : 'tags-single'}>{tag}</div>
    );
}

export default Tag;