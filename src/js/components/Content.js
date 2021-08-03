import React, {useState, useEffect} from 'react';
import Post from "./elements/Post";
import {fetchPosts, tagPosts} from "../firebaseFunc";
import {useDispatch, useSelector} from "react-redux";
import {switchDate} from "../redux/actions/switchDate";
// import {postDatabase} from "../postsDatabase";
// import {db} from "../firebase";
// import sortBy from "array-sort-by";

const Content = () => {
    const [newPost, setNewPost] = useState(false)

    const dispatch = useDispatch();
    const postList = useSelector(state => state.sort.posts)

    const updatePost = (idx, post) => {
        // const postLists = posts;
        // postLists[idx] = post;
        // setPosts(postLists);
    }

    useEffect( () => {
        dispatch(switchDate())
    }, [])

    const addNew = (e) => {
        setNewPost(!newPost)
    }

    const searchTags = (e) => {
        // tagPosts(setPosts, e.target.innerHTML)
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

                {postList.length > 0 && postList.map((post) => {
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