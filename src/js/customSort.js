import sortBy from "array-sort-by";

const customSort = (res) => {
    const posts = res.docs.map(post => post.data());
    const ids = res.docs.map(el => {
        return {id:el.id, date:el.data().date}
    });
    sortBy(posts, el =>-new Date(el.date));
    sortBy(ids, el =>-new Date(el.date))
    return ids.map((el, idx) => [el.id, posts[idx]]);
};

export {customSort}