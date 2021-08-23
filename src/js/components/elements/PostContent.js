import React from 'react';
import PostContentMain from "./PostContentMain";
import PostContentEditor from "./PostContentEditor";
import PostDate from "./PostDate";

const PostContent = ({
                         currPost, newPost, setNewPost, editor, createPost,
                         tagClass,setTagClass, setEndIndicator,
                     }) => {
    return (
        <div className="post-content">
            {!editor && (
                <PostContentMain title={currPost.title}
                                 tags={currPost.tags}
                                 text={currPost.text}
                                 setEndIndicator={setEndIndicator}/>

            )}

            {editor &&
            <PostContentEditor newPost={newPost}
                               setNewPost={setNewPost}
                               tagClass={tagClass}
                               setTagClass={setTagClass}/>}
            <PostDate date={currPost.date} createPost={createPost}/>
        </div>
    );
}

export default PostContent;