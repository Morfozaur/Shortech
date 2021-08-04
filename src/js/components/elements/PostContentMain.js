import React from 'react';
import Tag from "./Tag";
import {useDispatch} from "react-redux";
import {switchTag} from "../../redux/actions/switchTag";

const PostContentMain = ({title,tags, text}) => {

    const dispatch = useDispatch();
    const searchTags = e => {
        dispatch(switchTag(e.target.innerHTML))
    }


    return (
        <div className="post-content-main">
            <h3 className='post-title'>{title}</h3>
            <div className="tags">
                {tags.map((tag, idx) => <Tag key={title+tag+idx}
                                             tag={tag}
                                             idx={idx}
                                             handleClick={searchTags}/>)}
            </div>
            <p className='post-text'>{text}</p>
        </div>
    );
}

export default PostContentMain;