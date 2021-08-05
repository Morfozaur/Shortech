import React, {useState, useEffect} from 'react';
import Post from "./elements/Post";
import {useDispatch, useSelector} from "react-redux";
import {switchDate} from "../redux/actions/switchDate";
import {loadMoreData} from "../redux/actions/loadMoreData";
import {loadMoreTag} from "../redux/actions/loadMoreTag";

const Content = () => {
    const [newPost, setNewPost] = useState(false)

    const dispatch = useDispatch();
    const postList = useSelector(state => state.sort.posts);
    const lastState = useSelector(state => state.count);
    const keyTag = useSelector(state => state.tag);

    useEffect( () => {
        dispatch(switchDate());
    }, [])

    const addNew = (e) => {

        setNewPost(!newPost);
    }
    
    const dej = () => {
        if (keyTag ==='date') {
            dispatch(loadMoreData(lastState, postList))
        } else {
            dispatch(loadMoreTag(keyTag, lastState, postList))
        }
        console.log(keyTag)
    };

    return (
        <>
            <p>{lastState}</p>
            <i className="fas fa-plus-circle fa-2x add-new" onClick={e=> addNew(e)}/>
            <section className='content-section'>

                {newPost && <Post title={''}
                                  text={''}
                                  img={''}
                                  tags={[]}
                                  highlight={''}
                                  createPost={true}
                                  editorClass={'Zapisz'}
                                  addNew={addNew}/>}

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
            <br/>
            <br/>
            <p onClick={e=>dej(e)}>DEJ</p>
        </>
    );
};

export default Content;