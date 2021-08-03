
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



//TO TEN FRAGMENT

// const fetchSinglePost = async (id, array) => {
//     const singlePost = await db.collection('articles').doc(id).get()
//     array.push(singlePost.data())
// }
//
// useEffect( () => {
//     const fetchPosts = async () => {
//         const postsArray = [];
//         const res =  await db.collection('sort-data').doc('chrono').get();
//         const postsList = res.data().data;
//         for (const post of postsList) {
//             await fetchSinglePost(post, postsArray);
//         }
//         setPosts(postsArray);
//     };
//     fetchPosts();
// }, [])
//
//