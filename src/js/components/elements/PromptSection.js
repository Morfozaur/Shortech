import React from 'react';
import PromptAlert from "./PromptAlert";
import PromptRemove from "./PromptRemove";
import PromptDemo from "./PromptDemo";

const PromptSection = ({id, prompts, errorsMsg, isDemo, setPromptRemove}) => {

    return (
        <div className='prompt-section'>
            {prompts.alert &&
            <PromptAlert errorsMsg={errorsMsg}/>}
            {prompts.remove &&
            <PromptRemove id={id} prompts={prompts} setPromptRemove={setPromptRemove} isDemo={isDemo}/>}
            {prompts.demo &&
            <PromptDemo/>}
        </div>
    );
}

export default PromptSection;