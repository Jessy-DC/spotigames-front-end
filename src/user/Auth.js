import React from 'react';

import './Auth.css'

const Auth = () => {
    return (
        <form>
            <h2>Please login</h2>
            <div className="field">
                <div className="control">
                    <input className="input is-primary" type="text" placeholder="Name" />
                </div>
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input is-primary" type="email" placeholder="Email" />
                    <span className="icon is-left">
                      <ion-icon name="mail-outline">Email</ion-icon>
                    </span>
                </p>
            </div>
            <div className="control">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    )
}

export default Auth;