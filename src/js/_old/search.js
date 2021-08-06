// import {db} from "../../firebase";
// import {fetchError, fetchPosts, fetchSearchResult, fetchTagArrLength} from "./allFetchers";
// import {customSort} from "../../customSort";
// import {tagListLimiter} from "../../tagListLimiter";
//
// const search = (value) => {
//     return (dispatch) => {
//         db.collection('articles')
//             .where('tags', 'array-contains', value)
//             .get()
//
//             .then(res => {
//                 setEndIndicator(false)
//                 const searchResult = customSort(res);
//                 dispatch(fetchSearchResult(searchResult));
//                 const data = tagListLimiter(searchResult, 4);
//                 dispatch(fetchPosts(data));
//                 dispatch(fetchTagArrLength(data.length));
//             })
//             .catch(err => {
//                 dispatch(fetchError(err.message))
//             })
//
//     }
// };
//
// export {search}