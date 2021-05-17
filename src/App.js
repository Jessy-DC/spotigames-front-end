import React, {useEffect, useState, useCallback} from 'react';
import './App.css';

function App() {
  const [games, setGames] = useState(null);

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

    return (
        <div className="App">
            <p>Welcome !</p>
            <ul>
                {games && games.map((game) => {
                    return <li id={game.id}>{game.title}</li>
                })}
            </ul>
        </div>
    )

}

export default App;
