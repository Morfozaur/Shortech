import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import autosize from "autosize/dist/autosize";
import { Provider } from 'react-redux'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {allReducers} from "./js/redux/reducers/allReducers";
import 'dotenv/config';

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
    applyMiddleware(thunk)
)

const store = createStore(allReducers, composeEnhancers)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
