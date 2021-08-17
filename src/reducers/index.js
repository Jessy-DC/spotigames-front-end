import {combineReducers} from 'redux';

import gamesAPI from './games'

const gamesApp = combineReducers({
    gamesAPI,
})

export default gamesApp;