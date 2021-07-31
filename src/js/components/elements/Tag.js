import React from 'react';

import firebase, {db} from '../../firebase'

const Tag = ({idx, tag, edit}) => {

    const click = async () => {
        const data = db.collection('articles');
        const doc = await data.get();
        console.log('Document data:', doc.data());


        console.log(data)
    };
    return (
        <div key={idx+tag}
             className={edit ? 'tags-single delete' : 'tags-single'}
             onClick={click}>{tag}</div>
    );
}

export default Tag;