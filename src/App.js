import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './css/spotigames.css';
import Navbar from "./components/navbar";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";

function App() {
    const { token, login, logout, userId } = useAuth();

    return (
        <AuthContext.Provider value={{
            isLoggedIn: !!token,
            token: token,
            userId: userId,
            login: login,
            logout: logout }}
        >
            <Router >
                <div>
                    <Navbar />
                    <p>Welcome !</p>
                </div>
            </Router>

        </AuthContext.Provider>
    )
}

export default App;
