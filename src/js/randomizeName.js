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
    console.log(`${name.substr(0, name.length-4)}-${key}-${name.substr(name.length-5, 5)}`)
    return `${name.substr(0, name.length-4)}-${key}-${name.substr(name.length-5, 5)}`
};

export {randomizeName}