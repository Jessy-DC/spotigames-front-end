import React from 'react';
import {connect} from 'react-redux';
import GameItem from "./GameItem";
import {GET_GAMES_START, getAllGamesAPI} from "../actions/games";

const GameList = ({games}) => (
    <ul>
        {games.map((game, index) => (
            <GameItem key={index} {...game}  />
        ))
        }
    </ul>
)

const mapStateToProps = state => {
    let games = state.gamesAPI.games;
    return {
        games : games
    }
}

const VisibleGamesList = connect(
    mapStateToProps
)(GameList);

export default VisibleGamesList;