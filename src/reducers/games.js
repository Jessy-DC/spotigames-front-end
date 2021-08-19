import {GET_GAMES_START, GET_GAMES_ERROR, GET_GAMES_SUCCESS, getAllGamesAPI} from "../actions/games";


function getInitialState(){
    return {
        games: [],
        isFetching : false,
        error : false,
        errorMessage: null,
        returnMessage:null,
    }
}

function gamesAPI(state, action){
    if (!state) {
        state = getInitialState();
    }
    switch (action.type) {
        case GET_GAMES_START:
            return {
                ...state,
                isFetching: true,
                error : false,
                errorMessage: null
            }
        case GET_GAMES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error : false,
                errorMessage: null,
                returnMessage:action.payload.message,
                games : action.payload.games
            }
        case GET_GAMES_ERROR:
            return {
                ...state,
                isFetching: false,
                error : true,
                errorMessage: action.payload.message
            }

        default:
            return state
    }

}

export default gamesAPI;