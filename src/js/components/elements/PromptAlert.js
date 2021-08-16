import React from 'react';

const PromptAlert = ({titleErr, tagsErr, textErr, imgErr}) => {
    return (
        <div className='post-alert'>
            <h3>Wpis nie został zapisany. Wykryto następujące błędy:</h3>
            <ul className='error-list'>
                {titleErr && <li>- Tytuł musi składać się przynajmniej z 5 znaków</li>}
                {textErr && <li>- Wpis musi mieć długość co najmniej 30 znaków</li>}
                {tagsErr && <li>- Wpis musi zawierać co najmniej jeden tag</li>}
                {imgErr && <li>- Wpis musi zawierać zdjęcie</li>}
            </ul>
        </div>
    );
}

export default PromptAlert;