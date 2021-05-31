import React, {useContext, useState} from 'react';

import './Auth.css'
import {AuthContext} from "../context/auth-context";
import {useHttpClient} from "../hooks/http-hook";
import {useForm} from "../hooks/form-hook";

const Auth = () => {
    const auth = useContext(AuthContext);
    const {isLoginMode, setIsLoginMode} = useState(true);
    const {sendRequest} = useHttpClient();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputEmailHandler = event => {
        setEmail(event.target.value);
    }

    const inputPasswordHandler = event => {
        setPassword(event.target.value);
    }

    const authSubmitHandler = async event => {
        event.preventDefault();

        try {
            const responseData = await sendRequest(
                'http://localhost:5000/api/users/login',
                'POST',
                JSON.stringify({
                    email: email,
                    password: password
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responseData.userId, responseData.token);
        } catch (err) {}

    }

    return (
        <form onSubmit={authSubmitHandler}>
            <h2>Please login</h2>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input onChange={inputEmailHandler} className="input is-primary" type="email" placeholder="Email" />
                    <span className="icon is-left">
                      <ion-icon name="mail-outline">Email</ion-icon>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input onChange={inputPasswordHandler} className="input is-primary" type="password" placeholder="Password" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="control">
                <button type="submit" className="button is-link">Submit</button>
            </div>
        </form>
    )
}

export default Auth;