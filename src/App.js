import React, {useEffect, useState, useCallback} from 'react';
import './App.css';

function App() {
  const [games, setGames] = useState(null);
  const [newGame, setNewGame] = useState('');
  const [id, setId] = useState(3);

  const getGames = useCallback (
      async (url, method = 'GET') => {
          try {
              const response = await fetch(url, {
                  method,
              });

              const responseData = await response.json();

              return responseData;
          } catch (err) {
          }
      }, [])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const responseData = await getGames(
                    'http://localhost:5000/api/games'
                );
                setGames(responseData.games);
            } catch (err) {}
        };
        fetchGames();
    }, [getGames]);

  const addGame = async () => {
      try {
          let response = await fetch(
              'http://localhost:5000/api/games', {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      id: id,
                      title: newGame
                  })
              }
          );

          let responseData = await response.json();
          setGames(responseData.games);
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
            <input type="text" value={newGame} onChange={handleChange} />
            <button onClick={addGame}>Add game</button>
            <ul>
                {games && games.map((game) => {
                    return <li id={game.id}>{game.title}</li>
                })}
            </ul>
        </div>
    )

}

export default App;
