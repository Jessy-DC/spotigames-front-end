import React, {useContext, useState} from 'react';

import './Auth.css'
import {AuthContext} from "../context/auth-context";
import {useHttpClient} from "../hooks/http-hook";
import {useForm} from "../hooks/form-hook";

const Auth = () => {
    const auth = useContext(AuthContext);
    const {isLoginMode, setIsLoginMode} = useState(true);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    });

    const authSubmitHandler = async event => {
        event.preventDefault();

        if (isLoginMode) {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/login',
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                auth.login(responseData.userId, responseData.token);
            } catch (err) {}
        }
    }

    return (
        <form onSubmit={authSubmitHandler}>
            <h2>Please login</h2>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input onChange={inputHandler} className="input is-primary" type="email" placeholder="Email" />
                    <span className="icon is-left">
                      <ion-icon name="mail-outline">Email</ion-icon>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input onChange={inputHandler} className="input is-primary" type="password" placeholder="Password" />
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