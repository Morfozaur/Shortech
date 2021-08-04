const customDate = () => {
    const date = new Date();
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDay() +1 ;
    let h = date.getHours();
    let min = date.getMinutes();
    if (m < 10) {m = `0${m}`}
    if (h < 10) {h = `0${h}`}
    if (d < 10) {d = `0${d}`}
    if (min < 10) {min = `0${min}`}
    return(`${y}-${m}-${d}T${h}:${min}`)
};

export {customDate}