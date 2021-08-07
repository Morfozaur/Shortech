import React, {useState, useEffect, useRef} from 'react';
import Post from "./elements/Post";
import {useDispatch, useSelector} from "react-redux";
import {switchDate} from "../redux/actions/switchDate";
import {loadMoreData} from "../redux/actions/loadMoreData";
import {loadMoreTag} from "../redux/actions/loadMoreTag";
import ArrowScroll from "./elements/ArrowScroll";

const Content = ({endIndicator, setEndIndicator, isLogged}) => {
    const hasFetchedData = useRef(false)
    const [newPost, setNewPost] = useState(false)

    const dispatch = useDispatch();

    let postList = useSelector(state => state.sortedPosts.posts);
    let lastPost = useSelector(state => state.lastPost);
    let sortedTagPosts = useSelector(state => state.sortedTagPosts)
    let keyTag = useSelector(state => state.tagSelect);

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

    useEffect( () => {
        if (!hasFetchedData.current) {
            dispatch(switchDate(setEndIndicator))
        }
    }, [dispatch, setEndIndicator])

    useEffect(()=> {

    }, [setEndIndicator])

    return (
        <>
            {isLogged &&
            <i className="fas fa-plus-circle fa-2x add-new" onClick={e=> addNew(e)}/>}

                <div className="sort-info">
                    {keyTag === 'date' && <h4>Najnowsze wpisy:</h4>}
                    {keyTag !== 'date' && <h4>Wpisy z kagetorii {keyTag}:</h4>}
                    <hr className='date-line'/>
                </div>
                <section className='content-section'>

                    {(newPost && isLogged) &&
                    <Post title={''}
                          text={''}
                          img={''}
                          tags={[]}
                          highlight={''}
                          createPost={true}
                          editorClass={'Zapisz'}
                          isLogged={isLogged}
                          addNew={addNew}/>}

                    {postList.length > 0 && postList.map((post) => {
                            const {title, text, img, tags, highlight, date} = post[1];
                            const id = post[0];

                        /// Tu z indeksem trzeba poszaleć
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
                                      setEndIndicator={setEndIndicator}
                                      isLogged={isLogged}
                                      changeControl={postList}/>
                            )
                        })
                    }

                </section>
            {postList.length > 3 &&
            <ArrowScroll endStream={endIndicator} scroll={scroll}/>}
        </>
    );
};

export default Content;