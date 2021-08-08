import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <h2>Shortech - Opis projektu</h2>
            <p>Shortech jest minimalistyczną witryną mikroblogową zbudowaną w zgodzie z zasadą WYSIWIG (ang. what you see is what you get). W przeciwieństwie do klasycznych systemów CMS tu warstwa administracyjna została scalona z głównym interfejsem. Dzięki temu autor już w momencie komponowania wpisu wie, jak post będzie wyglądał po publikacji.</p>
            <p>Strona w całości funkcjonuje w oparciu o reactowe komponenty, wykorzystano w niej następujące technologie oraz biblioteki:</p>
            <ul className='about-list'>
                <li>
                    <strong>Sass -</strong> zarządzanie stylami,
                </li>
                <li>
                    <strong>FontAwesome -</strong> ikony nawigacji,
                </li>
                <li>
                    <strong>React Router -</strong> zarządzanie odnośnikami wewnątrz witryny,
                </li>
                <li>
                    <strong>Firebase -</strong> przechowywanie wpisów i zdjęć ilustracyjnych, autoryzacja administratora,
                </li>
                <li>
                    <strong>Redux + redux-thunk -</strong> komunikacja i pobieranie danych z API Firebase'a,
                </li>
                <li>
                    <strong>Autosize -</strong> automatyczne, dynamiczne dopasowywanie wysokości pola textarea w edytorze,
                </li>
                <li>
                    <strong>Array sortBy -</strong> sortowanie chronologicznie uporządkowanych postów oznaczonych konkretnym tagiem.
                </li>
            </ul>
            <p>Shortech to projekt o dużym potencjale rozwojowym. Szablon można rozbudować o kolejne funkcje zgodne z WYSIWIG takie jak galeria obrazów wyświetlana w miejscu głównego zdjęcia, bibliotekę mediów, formularz modyfikacji daty publikacji, system planowania postów, pola z linkami do źródeł etc.</p>
        </div>
    );
}

export default About;