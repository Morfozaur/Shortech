import {db} from "./firebase";
import sortBy from "array-sort-by";

const updateChrono = async () => {
    const res =  db.collection('articles');
    const data = await res.get();
    const postsArray = [];
    data.docs.forEach(post => {
        postsArray.push({id: post.id, date:post.data().date});
    })
    sortBy(postsArray, (o) => [-new Date(o.date), o.id])
    const postsChronoArr = [];
    postsArray.forEach(post => {
        postsChronoArr.push(post.id)
    })

    const updateChronoList = db.collection('sort-data').doc('chrono').set({data:postsChronoArr});
};

export {updateChrono}