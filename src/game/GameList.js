import React from 'react';

import GameItem from "./GameItem";

const GameList = props => {
    if (!props.items) {
        return <div>
            <article className="message">
                <div className="message-body">
                    No games found, please come back later !
                </div>
            </article>
        </div>
    } else {
        return <ul>
            {props.items.map((game) => {
                return <GameItem
                    key={game.id}
                    id={game.id}
                    title={game.title}
                />
            })}
        </ul>
    }
}

export default GameList;