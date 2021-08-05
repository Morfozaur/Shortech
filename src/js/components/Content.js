import React, {useState, useEffect} from 'react';
import Post from "./elements/Post";
import {useDispatch, useSelector} from "react-redux";
import {switchDate} from "../redux/actions/switchDate";
import {loadMoreData} from "../redux/actions/loadMoreData";
import {loadMoreTag} from "../redux/actions/loadMoreTag";
import ArrowScroll from "./elements/ArrowScroll";

const Content = ({endIndicator, setEndIndicator}) => {
    const [newPost, setNewPost] = useState(false)


    const dispatch = useDispatch();

    const postList = useSelector(state => state.sortedPosts.posts);
    const lastPost = useSelector(state => state.lastPost);
    const sortedTagPosts = useSelector(state => state.sortedTagPosts)
    const keyTag = useSelector(state => state.tagSelect);
    const filterType = useSelector(state => state.tagSelect);



    useEffect( () => {
        dispatch(switchDate(setEndIndicator));
    }, [])

    const addNew = () => {
        setNewPost(!newPost);
    }

    const scroll = () => {
        if (endIndicator) {
            window.scrollTo(0, 0)
        } else {
            if (keyTag ==='date') {
                dispatch(loadMoreData(lastPost, postList, setEndIndicator))
            } else {
                dispatch(loadMoreTag(sortedTagPosts, postList, setEndIndicator))
            }
        }
    }


    return (
        <>

            <i className="fas fa-plus-circle fa-2x add-new" onClick={e=> addNew(e)}/>

                <div className="sort-info">
                    {keyTag === 'date' && <h5>Najnowsze wpisy:</h5>}
                    {keyTag !== 'date' && <h5>Wpisy z kagetorii {keyTag}:</h5>}
                    <hr className='date-line'/>
                </div>
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
                                      editorClass ={"Edytuj"}
                                      setEndIndicator={setEndIndicator}/>
                            )
                        })
                    }

                </section>
            <ArrowScroll endStream={endIndicator} scroll={scroll}/>
        </>
    );
};

export default Content;