import React, {useState, useEffect, useRef} from 'react';
import Post from "./elements/Post";
import {useDispatch, useSelector} from "react-redux";
import {listByDate} from "../redux/actions/listByDate";
import {loadMoreDate} from "../redux/actions/loadMoreDate";
import {loadMoreTag} from "../redux/actions/loadMoreTag";
import ArrowScroll from "./elements/ArrowScroll";
import {fetchTagLoader} from "../redux/actions/allFetchers";

const Content = ({endIndicator, setEndIndicator, isLogged, isDemo}) => {
    const hasFetchedData = useRef(false);
    const [newPost, setNewPost] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const dispatch = useDispatch();

    let postList = useSelector(state => state.sortedPosts.posts);
    let lastPost = useSelector(state => state.lastPost);
    let sortedTagPosts = useSelector(state => state.sortedTagPosts)
    let keyTag = useSelector(state => state.tagSelected.tag);
    let dateSelect = useSelector(state => state.tagSelected.isDate);
   // let {isDate, tag: asd} = useSelector({tag} => state.tagSelected);

    const addNew = () => {
        setNewPost(!newPost);
    }

    const scroll = () => {
        if (endIndicator) {
            window.scrollTo(0, 0)
        } else {
            if (dateSelect) {
                dispatch(loadMoreDate(lastPost, postList, setEndIndicator))
            } else {
                dispatch(loadMoreTag(sortedTagPosts, postList, setEndIndicator))
            }
        }
    }

    const toMain = () => {
        dispatch(listByDate(setEndIndicator));
        dispatch(fetchTagLoader("date", true));
    };

    useEffect( () => {
        if (!hasFetchedData.current) {
            dispatch(listByDate(setEndIndicator))
        }
    }, [dispatch, setEndIndicator])

    return (
        <>
            {(isLogged || isDemo) &&
            <i className="fas fa-plus-circle fa-2x add-new" onClick={e=> addNew(e)}/>}

                <div className="sort-info">
                    {dateSelect && <h4>Najnowsze wpisy:</h4>}
                    {!dateSelect && <h4>Wpisy z kagetorii {keyTag}:</h4>}
                    <hr className='date-line'/>
                </div>
                <section className='content-section'>

                    {(newPost && (isLogged || isDemo)) &&
                    <Post title={''}
                          text={''}
                          img={''}
                          tags={[]}
                          highlight={''}
                          createPost={true}
                          editorClass={'Zapisz'}
                          isLogged={isLogged}
                          isDemo={isDemo}
                          addNew={addNew}/>}

                    {postList.length && postList.map((post) => {
                            const {title, text, img, tags, highlight, date} = post[1];
                            const id = post[0];
                            const sortedTags = tags.sort();
                            if (!isLoaded) {setIsLoaded(true)}
                            return (
                                <Post key={id}
                                      id={id}
                                      title={title}
                                      text={text}
                                      img={img}
                                      tags={sortedTags}
                                      highlight={highlight}
                                      date={date}
                                      createPost={false}
                                      editorClass ={"Edytuj"}
                                      setEndIndicator={setEndIndicator}
                                      isLogged={isLogged}
                                      isDemo={isDemo}
                                      changeControl={postList}/>
                            )
                        })
                    }

                </section>
            {(!postList.length && isLoaded) &&
            <div className='search-fault'>
                <h2>Błąd wyszukiwania</h2>
                <p>Niestety, nie udało się znaleźć wpisów oznaczonych tagiem <span>{keyTag}</span>.</p>
                <button className='btn' onClick={toMain}>Strona główna</button>
            </div>}
            {postList.length > 3 &&
            <ArrowScroll endStream={endIndicator} scroll={scroll}/>}
        </>
    );
};

export default Content;