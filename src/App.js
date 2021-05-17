import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [games, setGames] = useState();

      useEffect(() => {
          const getGames = async () => {
            try {
              const responseData = await fetch(
                  'http://localhost:5000/api/games', {
                      method: 'GET',
                      body: null,
                      headers: {}
                  }
              );
              let gamesFounded = await responseData.json();
              setGames(gamesFounded);
            } catch (err) {}
          };
        getGames();
      }, [])

    if (games && games.length > 0) {
        return (
            <div className="App">
                <p>Welcome !</p>
                <ul>
                    {games.map((id, game) => {
                        return <li id={id}>{game.title}</li>
                    })}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <p>No games here...</p>
            </div>
        )
    }


}

export default App;
