import React from 'react';

const PromptAlert = ({errorsMsg}) => {
    return (
        <div className='post-alert'>
            <h3>Wpis nie został zapisany. Wykryto następujące błędy:</h3>
            <ul className='error-list'>
                {errorsMsg.title && <li>- Tytuł musi składać się przynajmniej z 5 znaków</li>}
                {errorsMsg.text && <li>- Wpis musi mieć długość co najmniej 30 znaków</li>}
                {errorsMsg.tags && <li>- Wpis musi zawierać co najmniej jeden tag</li>}
                {errorsMsg.img && <li>- Wpis musi zawierać zdjęcie</li>}
            </ul>
        </div>
    );
}

export default PromptAlert;