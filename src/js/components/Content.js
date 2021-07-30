import React, {useState} from 'react';
import Post from "./elements/Post";
import {postDatabase} from "../postsDatabase";

const Content = () => {
    const [posts, setPosts] = useState(postDatabase);

    const updatePost = (idx, post) => {
        const postLists = posts;
        postLists[idx] = post;
        setPosts(postLists);
    }

    console.log(posts)
    return (
        <>
            <i className="fas fa-plus-circle fa-2x add-new"/>
            <section className='content-section'>

                {posts.map((post, idx) => {
                    const {title, text, img, tags, highlight, id, date} = post;
                    return (
                        <Post title={title}
                              key={id}
                              text={text}
                              img={img}
                              tags={tags}
                              highlight={highlight}
                              date={date}
                              updatePost={updatePost}/>
                    )
                })}
            </section>
        </>
    );
}

export default Content;