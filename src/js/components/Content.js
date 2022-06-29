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

    let postsList = useSelector(state => state.sortedPosts.posts);
    let postsNumber = useSelector(state => state.postsNumber);
    let lastPost = useSelector(state => state.lastPost);
    let sortedTagPosts = useSelector(state => state.sortedTagPosts)
    let {tag: keyTag, isDate: dateSelect} = useSelector(state => state.tagSelected)

    const addNew = () => {
        setNewPost(!newPost);
    }

    const scroll = () => {
        if (endIndicator) {
            window.scrollTo(0, 0)
        } else {
            if (dateSelect) {
                dispatch(loadMoreDate(lastPost, postsList, postsNumber, setEndIndicator))
            } else {
                dispatch(loadMoreTag(sortedTagPosts, postsList, setEndIndicator))
            }
        }
    }

    const toMain = () => {
        dispatch(listByDate(setEndIndicator, postsNumber));
        dispatch(fetchTagLoader("date", true));
    };

    useEffect( () => {
        if (!hasFetchedData.current) {
            dispatch(listByDate(setEndIndicator));
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
                    <Post post={{title: '',text:'', img: '', tags: [], highlight:''}}
                          createPost={true} editorClass={'Zapisz'}
                          isLogged={isLogged} isDemo={isDemo} addNew={addNew}/>}

                    {postsList.length ? postsList.map(post => {
                            const id = post[0];
                            const sortedTags = post[1].tags.sort();
                            const setPost = {...post[1], tags: sortedTags}
                            if (!isLoaded) {setIsLoaded(true)}
                            return (
                                <Post key={id} id={id} post={setPost}
                                      editorClass ={"Edytuj"} createPost={false}
                                      setEndIndicator={setEndIndicator}
                                      isLogged={isLogged} isDemo={isDemo}/>
                            )
                        })
                    : <></>}

                </section>
            {(!postsList.length && isLoaded) &&
            <div className='search-fault'>
                <h2>Błąd wyszukiwania</h2>
                <p>Niestety, nie udało się znaleźć wpisów oznaczonych tagiem <span>{keyTag}</span>.</p>
                <button className='btn' onClick={toMain}>Strona główna</button>
            </div>}
            {postsList.length > 3 &&
            <ArrowScroll endStream={endIndicator} scroll={scroll}/>}
        </>
    );
};

export default Content;