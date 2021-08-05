import React from 'react';
import PostContentMain from "./PostContentMain";
import PostContentEditor from "./PostContentEditor";
import PostDate from "./PostDate";

const PostContent = ({
                         editor, date, createPost,
                         currTitle, newTitle, setNewTitle,
                         currTags, newTags, setNewTags,
                         tagClass,setTagClass,
                         currText, newText, setNewText,
                         setEndIndicator}) => {
    return (
        <div className="post-content">
            {!editor && (
                <PostContentMain title={currTitle}
                                 tags={currTags}
                                 text={currText}
                                 setEndIndicator={setEndIndicator}/>

            )}

            {editor &&
            <PostContentEditor newTitle={newTitle} setNewTitle={setNewTitle}
                               newTags={newTags} setNewTags={setNewTags}
                               newText={newText} setNewText={setNewText}
                               tagClass={tagClass} setTagClass={setTagClass}/>}
            <PostDate date={date} createPost={createPost}/>
        </div>
    );
}

export default PostContent;