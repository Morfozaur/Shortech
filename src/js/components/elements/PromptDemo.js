import React from 'react';

const PromptDemo = () => {
    console.log('penis')
    return (
        <div className='remove-frame'>
            <h2>Zapisanie zablokowane</h2>
            <p>Wersja demonstracyjna umożliwia jedynie edycję już opublikowanych wpisów. Po zalogowaniu CMS wysyła do Firebase'a nowy dokumnet, który natychmiast jest renderowany na stronie z aktualną datą na górze strony.</p>
        </div>
    );
}

export default PromptDemo;