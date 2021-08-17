import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";

import gamesApp from './reducers'

//Middleware logger redux
const logger = createLogger();

const store = createStore(gamesApp, applyMiddleware(thunk, logger))

console.log("INITIAL STATE REDUX" , store.getState())

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
