import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import './css/spotigames.css';
import Navbar from "./components/navbar";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import Auth from "./user/Auth";

function App() {
    const { token, login, logout, userId } = useAuth();

    let routes;

    if (token) {
        routes = (
            <Switch>
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/auth">
                    <Auth />
                </Route>
            </Switch>
        );
    }

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
