import React, {useState} from 'react';
import Post from "./elements/Post";
import {postDatabase} from "../postsDatabase";
// import sortBy from "array-sort-by";

const Content = () => {
    const [posts, setPosts] = useState(postDatabase);
    const [newPost, setNewPost] = useState(false)

    const updatePost = (idx, post) => {
        const postLists = posts;
        postLists[idx] = post;
        //tu wrzucić sortowanie
        setPosts(postLists);
    }

    const addNew = (e) => {
        setNewPost(!newPost)
        console.log('penis')
    }

    // const arr = ['1983/03/06', '1980/12/24', '1985/08/31', '1983/03/05'];
    // console.log(1, arr);
    // const arr2 = [...arr];
    // const expected = ['1985/08/31', '1983/03/06', '1983/03/05', '1980/12/24'];
    // sortBy(arr2, s => -new Date(s));



    return (
        <>
            <i className="fas fa-plus-circle fa-2x add-new" onClick={e=> addNew(e)}/>
            <section className='content-section'>
                {newPost && <Post title={''}
                                  text={''}
                                  img={''}
                                  tags={[]}
                                  highlight={''}
                                  date={''}
                                  createPost={true}
                                  updatePost={updatePost}/>}
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
};

export default Content;