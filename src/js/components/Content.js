import React, {useState, useEffect} from 'react';
import Post from "./elements/Post";
// import {postDatabase} from "../postsDatabase";
import {db} from "../firebase";
// import sortBy from "array-sort-by";

const Content = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState(false)

    const updatePost = (idx, post) => {
        const postLists = posts;
        postLists[idx] = post;
        setPosts(postLists);
    }


    //TO TEN FRAGMENT

    const fetchSinglePost = async (id, array) => {
        const singlePost = await db.collection('articles').doc(id).get()
        array.push(singlePost.data())
    }

    useEffect( () => {
        const fetchPosts = async () => {
            const postsArray = [];
            const res =  await db.collection('sort-data').doc('chrono').get();
            const postsList = await res.data().data;
            for (const post of postsList) {
                await fetchSinglePost(post, postsArray);
            }
            setPosts(postsArray);
        };
        fetchPosts();
    }, [])

    //
    // useEffect(()=> {
    //     const fetchPosts = async() => {
    //         const res = await db.collection('articles').get();
    //         res.docs.forEach(single => {
    //             setPosts([...posts, single.data()])
    //         })
    //     }
    //     fetchPosts();
    // }, [])

    //TO TEN FRAGMENT

    const addNew = (e) => {
        setNewPost(!newPost)
    }

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

                {
                    posts && posts.map((post) => {
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
                    })
                }

            </section>
        </>
    );
};

export default Content;