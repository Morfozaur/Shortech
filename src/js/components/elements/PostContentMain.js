import React from 'react';
import Tag from "./Tag";
import {useDispatch} from "react-redux";
import {listByTag} from "../../redux/actions/listByTag";
import {fetchTagLoader} from "../../redux/actions/allFetchers";

const PostContentMain = ({title,tags, text, setEndIndicator}) => {

    const dispatch = useDispatch();
    const searchTags = e => {
        const tag = e.target.innerHTML;
        dispatch(listByTag(tag, setEndIndicator));
        dispatch(fetchTagLoader(tag, false));
    }


    return (
        <div className="post-content-main">
            <h2 className='post-title'>{title}</h2>
            <div className="tags">
                {tags.map((tag, idx) => <Tag key={title+tag+idx}
                                             tag={tag}
                                             idx={idx}
                                             handleClick={searchTags}/>)}
            </div>
            <p className='post-text' >{text}</p>
        </div>
    );
}

export default PostContentMain;