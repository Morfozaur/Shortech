import React, {useState} from 'react';
import Post from "./Post";

const Content = () => {
    const [posts, setPosts] = useState([])
    return (
        <section className='content-section'>
            {posts.map(post => {
                return (
                    <Post/>
                )
            })}
        </section>
    );
}

export default Content;