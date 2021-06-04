import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import './css/spotigames.css';
import Navbar from "./components/navbar";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import Auth from "./user/Auth";
import GameList from "./game/GameList";
import {useHttpClient} from "./hooks/http-hook";

function App() {
    const { token, login, logout, userId } = useAuth();
    const [games, setGames] = useState();
    const {sendRequest} = useHttpClient();

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/games/',
                );
                console.log(responseData.games);
                setGames(responseData.games)
            } catch (err) {}
        }
        fetchGames()
    }, [sendRequest])

    let routes = (
        <Switch>
            <Route path="/auth">
                <Auth />
            </Route>
            <Route path="/games">
                <GameList items={games} />
            </Route>
        </Switch>
    );

    return (
        <AuthContext.Provider value={{
            isLoggedIn: !!token,
            token: token,
            userId: userId,
            login: login,
            logout: logout }}
        >
            <Router >
                <Navbar />
                {routes}
            </Router>

        </AuthContext.Provider>
    )
}

export default App;
