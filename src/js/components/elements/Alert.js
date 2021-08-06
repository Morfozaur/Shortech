import React from 'react';

const Alert = ({title, tags, text, img}) => {
    return (
        <div className='post-alert'>
            <h3>Wpis nie został zapisany. Wykryto następujące błędy:</h3>
            <ul>
                {title && <li>Tytuł musi składać się przynajmniej z 5 znaków</li>}
                {text && <li>Wpis musi mieć długość co najmniej 30 znaków</li>}
                {tags && <li>Wpis musi zawierać co najmniej jeden tag</li>}
                {img && <li>Wpis musi zawierać zdjęcie</li>}
            </ul>
        </div>
    );
}

export default Alert;