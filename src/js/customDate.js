const customDate = () => {
    const date = new Date();
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();
    if (m < 10) {m = `0${m}`}
    if (h < 10) {h = `0${h}`}
    if (d < 10) {d = `0${d}`}
    if (min < 10) {min = `0${min}`}
    if (s < 10) {s = `0${s}`}
    return(`${y}-${m}-${d}T${h}:${min}:${s}`)
};

export {customDate}