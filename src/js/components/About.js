import React from 'react';

const About = () => {

    const features = [
        ['Sass', 'zarządzanie stylami'],
        ['FontAwesome','ikony nawigacji'],
        ['React Router','zarządzanie odnośnikami wewnątrz witryny'],
        ['Firebase','przechowywanie wpisów i zdjęć ilustracyjnych, autoryzacja administratora'],
        ['Redux + redux-thunk','zarządzanie stanem aplikacji'],
        ['Autosize','automatyczne, dynamiczne dopasowywanie wysokości pola textarea w edytorze'],
        ['Array sortBy','sortowanie chronologicznie uporządkowanych postów oznaczonych konkretnym tagiem']
    ]

    return (
        <div className='about'>
            <div className="about-title">
                <h2>Shortech</h2>
                <h4>Opis projektu</h4>
            </div>
            <p>Shortech jest minimalistyczną witryną mikroblogową zbudowaną w zgodzie z zasadą <strong>WYSIWYG</strong> (ang. what you see is what you get). W przeciwieństwie do klasycznych systemów CMS tu warstwa administracyjna została scalona z głównym interfejsem. Dzięki temu autor już w momencie komponowania wpisu wie, jak post będzie wyglądał po publikacji.</p>
            <p>Strona w całości funkcjonuje w oparciu o reactowe komponenty, wykorzystano w niej następujące technologie oraz biblioteki:</p>
            <ul className='about-list'>
                {features.map(el => <li><strong>{el[0]} - </strong>{el[1]}</li>)}
            </ul>
            <p>Shortech to projekt o dużym potencjale rozwojowym. Szablon można rozbudować o kolejne funkcje zgodne z WYSIWYG takie jak galeria obrazów wyświetlana w miejscu głównego zdjęcia, bibliotekę mediów, formularz modyfikacji daty publikacji, system planowania postów, pola z linkami do źródeł etc.</p>
        </div>
    );
}

export default About;