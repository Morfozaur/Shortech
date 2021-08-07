import React from 'react';
import Alert from "./Alert";
import PromptRemove from "./PromptRemove";

const PromptSection = ({
                           id, promptAlert, promptRemove, setPromptRemove,
                           titleErr, tagsErr, textErr, imgErr}) => {
    return (
        <div className='prompt-section'>
            {promptAlert &&
            <Alert titleErr={titleErr} tagsErr={tagsErr} textErr={textErr} imgErr={imgErr}/>}
            {promptRemove &&
            <PromptRemove id={id} setPromptRemove={setPromptRemove}/>}
        </div>
    );
}

export default PromptSection;