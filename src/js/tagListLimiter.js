const tagListLimiter = (arr, num) => {
    const limiter = (arr.length < num) ? arr.length : num;
    return arr.slice(0,limiter)
};

export {tagListLimiter}