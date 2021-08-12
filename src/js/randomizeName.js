const randomizeName = (name) => {
    let keyDate = new Date().getTime();

    const randomize = () => {
        let val = (keyDate + Math.random()*16)%16 | 0;
        return val.toString(16);
    }
    let key = '';
    for (let i = 0; i < 9; i++) {
        key = key + randomize();
        keyDate = Math.floor(keyDate/16);
    }
    return `${name}-${key}`
};

export {randomizeName}