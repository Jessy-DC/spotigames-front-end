import React, {useEffect, useState, useCallback} from 'react';
import {useHttpClient} from "./hooks/http-hook";

import './App.css';

function App() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [games, setGames] = useState(null);
  const [newGame, setNewGame] = useState('');
  const [id, setId] = useState(3);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/games'
                );

                setGames(responseData.games);
            } catch (err) {}
        };
        fetchGames();
    }, [sendRequest]);

  const addGame = async event => {
      event.preventDefault();
      try {
          let response = await sendRequest(
              'http://localhost:5000/api/games',
              'POST',
              JSON.stringify({
                  id: id,
                  title: newGame
              }),
              {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          });

          setGames(response.games);
      } catch (err) {}

      setId(id + 1);
  }

  const handleChange = event => {
      let writenGame = event.target.value;
      setNewGame(writenGame);
  }

    return (
        <div className="App">
            <p>Welcome !</p>
            <form method='POST' onSubmit={addGame}>
                <input type="text" value={newGame} onChange={handleChange} />
                <button type="submit">Add game</button>
            </form>

            <ul>
                {games && games.map((game) => {
                    return <li id={game.id}>{game.title}</li>
                })}
            </ul>
        </div>
    )

}

export default App;
