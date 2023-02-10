import React from 'react';
import {Navigate} from "react-router-dom";

const LoginPage = ({isLogged, logIn}) => {

    if(isLogged){
        return (
            <Navigate to="/"/>
        )
    }
    return (
        <div className="block_list">
            <p>Login to secret page</p>
            <button onClick={logIn} className="button">Login</button>
        </div>
    );
};

export default LoginPage;