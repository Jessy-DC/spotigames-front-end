import React from 'react';
import {connect} from 'react-redux';
import GameItem from "./GameItem";

const GameList = ({games}) => (
    <ul>
        {games.map((game, index) => (
            <GameItem key={index} {...game}  />
        ))
        }
    </ul>
)

const mapStateToProps = state => {
    return {
        games : state.games
    }
}

const GamesList = connect(
    mapStateToProps
)(GameList);

export default GamesList;