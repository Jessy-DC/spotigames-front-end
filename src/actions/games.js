export const GET_GAMES_START = 'GET_GAMES_START';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const GET_GAMES_ERROR = 'GET_GAMES_ERROR';

export function getAllGamesAPI() {

    return async dispatch => {
        dispatch({
            type :GET_GAMES_START,
            payload: {}
        })

        try {
            const url = `'http://localhost:5000/api/games/'`
            const response = await fetch(url, {
                method : 'GET',
            })
            const data = await response.json();
            if (!response.ok) {
                dispatch({
                    type :GET_GAMES_ERROR,
                    payload: data
                })
            } else {
                dispatch({
                    type :GET_GAMES_SUCCESS,
                    payload: data
                })
            }
        } catch (err) {
            dispatch({
                type :GET_GAMES_ERROR,
                payload: {}
            })
        }


        //
    }
    //GET_GAMES_START
    //APPEL FETCH API (ASYNC)
    //TRAITEMENT CODE RETOUR
    //SI OK CODE 200 API
    // GET_GAMES_SUCCESS
    // ELSE GET_GAMES_ERROR

}