import React from 'react';
import {deleteFromFirebase} from "../../firebaseFunc";

const PromptRemove = ({setPromptRemove, id}) => {
    const cancel = (e) => {
        e.preventDefault();
        setPromptRemove(false);
    };

    const removePost = (e) => {
        e.preventDefault();
        e.target.parentElement.parentElement.parentElement.parentElement.remove()
        deleteFromFirebase(id)
            .catch((err) => console.error(err))
    };
    return (
        <div className='remove-frame'>
            <h2>Czy na pewno chcesz usunąć ten wpis?</h2>
            <p>Jeśli naciśniesz "Usuń wpis", wpis zostanie trwale usunięty z bazy danych.</p>
            <div className="remove-frame-buttons">
                <button className="btn remove-accept alert" onClick={e=>removePost(e)}>Usuń wpis</button>
                <button className="btn remove-decline" onClick={e=>cancel(e)}>Anuluj</button>
            </div>
        </div>
    );
}

export default PromptRemove;