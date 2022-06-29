const tagListLimiter = (arr, limiter) => {
    const trimmer = (arr.length < limiter) ? arr.length : limiter;
    return arr.slice(0,trimmer)
};

export {tagListLimiter}