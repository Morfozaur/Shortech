import React from 'react';

const ArrowScroll = ({endStream, scroll}) => {
    const arrowClass= 'fa-2x upscroller fas fa-arrow-circle-'
    return (
        <i className={endStream ? `${arrowClass}up` : `${arrowClass}down`}
           onClick={scroll}/>
    );
}

export default ArrowScroll;