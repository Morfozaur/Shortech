import React from 'react';

const Tag = ({idx, tag, edit}) => {

    const click = () => {
        console.log('blah')
    }

    return (
        <div key={idx+tag}
             className={edit ? 'tags-single delete' : 'tags-single'}
             onClick={click}>{tag}</div>
    );
}

export default Tag;