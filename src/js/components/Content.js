import React, {useState} from 'react';
import Post from "./elements/Post";
import {postDatabase} from "../postsDatabase";

const Content = () => {
    const [posts, setPosts] = useState(postDatabase);
    console.log(posts)
    return (
        <section className='content-section'>
            <i className="fas fa-plus-circle fa-2x add-new"/>
            {posts.map(post => {
                const {title, text, img, tags, highlight, id, date} = post;
                return (
                    <Post title={title}
                          key={id}
                          text={text}
                          img={img}
                          tags={tags}
                          highlight={highlight}
                          date={date}/>
                )
            })}
        </section>
    );
}

export default Content;