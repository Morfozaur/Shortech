import React, {useState, useEffect} from 'react';
import Post from "./elements/Post";
import {useDispatch, useSelector} from "react-redux";
import {switchDate} from "../redux/actions/switchDate";
import {updateInFirebase} from "../firebaseFunc";
import {postDatabase} from "../postsDatabase";
import {db} from "../firebase";

const Content = () => {
    const [newPost, setNewPost] = useState(false)

    const dispatch = useDispatch();
    const postList = useSelector(state => state.sort.posts)

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
                                  createPost={true}
                                  editorClass={'Zapisz'}/>}

                {postList.length > 0 && postList.map((post) => {
                        const {title, text, img, tags, highlight, date} = post[1];
                        const id = post[0];
                        return (
                            <Post key={id}
                                  id={id}
                                  title={title}
                                  text={text}
                                  img={img}
                                  tags={tags}
                                  highlight={highlight}
                                  date={date}
                                  createPost={false}
                                  editorClass ={"Edytuj"}/>
                        )
                    })
                }

            </section>
        </>
    );
};

export default Content;