import React from 'react';
import {deleteFromFirebase} from "../../firebaseFunc";
import {fetchPostsNumber} from "../../redux/actions/allFetchers";
import {db} from "../../firebase";
import {useDispatch, useSelector} from "react-redux";


const PromptRemove = ({id, setPromptRemove, isDemo}) => {

    const dispatch = useDispatch();
    let postsNumber = useSelector(state => state.postsNumber);

    const cancel = (e) => {
        e.preventDefault();
        setPromptRemove(false);
    };

    const removePost = (e) => {
        e.preventDefault();
        let current = e.target.parentElement.parentElement.parentElement.parentElement;
        current.style.display = 'none';
        if (!isDemo) {
            deleteFromFirebase(id)
                .then(()=> {
                    postsNumber -= 1;
                    dispatch(fetchPostsNumber(postsNumber));
                    const updateNumber = db.collection('count').doc('posts');
                    updateNumber.set({number: postsNumber});
                })
                .catch((err) => console.error(err))

        }
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