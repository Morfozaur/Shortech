import React from 'react';
import classNames from "classnames";

const ArrowScroll = ({endStream, scroll}) => {
    return (
        <i className={classNames(
            'fa-2x upscroller fas',
            {'fa-arrow-circle-up': endStream},
            {'fa-arrow-circle-down': !endStream})}
           onClick={scroll}/>
    );
}

export default ArrowScroll;