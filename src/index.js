import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import reportWebVitals from './reportWebVitals';
import autosize from "autosize/dist/autosize";
import { Provider } from 'react-redux'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {allReducers} from "./js/redux/reducers/allReducers";

class AutoSize extends HTMLTextAreaElement {
    constructor() {
        super();
        autosize(this);
    }
}

customElements.define(
    "auto-size",
    AutoSize,
    { extends: "textarea" }
);

const composeEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(allReducers, composeEnhancers)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
