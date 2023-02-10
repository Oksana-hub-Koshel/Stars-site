import React from 'react';
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../../hooks/useAuth";

const LoginPage = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const {signIn}=useAuth()

    const fromPage=location.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()
        const form=e.target
        const user=form.username.value;
        signIn(user, ()=>navigate(fromPage, {replace:true}))
    }


    return (
        <div className="block_list">
            <p>Login to secret page</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;