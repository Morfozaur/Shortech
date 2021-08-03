import React from 'react';
import {useDispatch} from "react-redux";
import {switchTag} from "../../redux/actions/switchTag";

const Tag = ({idx, tag, edit}) => {

    const dispatch = useDispatch();

    const searchTags = e => {
        dispatch(switchTag(e.target.innerHTML))
    }

    return (
        <div key={idx+tag}
             className={edit ? 'tags-single delete' : 'tags-single'}
             onClick={e=>searchTags(e)}>{tag}</div>
    );
}

export default Tag;