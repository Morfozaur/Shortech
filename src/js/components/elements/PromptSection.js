import React from 'react';
import PromptAlert from "./PromptAlert";
import PromptRemove from "./PromptRemove";
import PromptDemo from "./PromptDemo";

const PromptSection = ({
                           id, promptAlert, promptRemove, setPromptRemove,
                           titleErr, tagsErr, textErr, imgErr, isDemo, promptDemo}) => {
    return (
        <div className='prompt-section'>
            {promptAlert &&
            <PromptAlert titleErr={titleErr} tagsErr={tagsErr} textErr={textErr} imgErr={imgErr}/>}
            {promptRemove &&
            <PromptRemove id={id} setPromptRemove={setPromptRemove} isDemo={isDemo}/>}
            {promptDemo &&
            <PromptDemo/>}
        </div>
    );
}

export default PromptSection;