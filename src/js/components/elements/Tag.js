import React from 'react';
import classNames from "classnames";

const Tag = ({idx, tag, edit, handleClick}) => {

    return (
        <div key={idx+tag}
             className={classNames('tags-single',{'delete': edit})}
             onClick={handleClick}>{tag}</div>
    );
}

export default Tag;