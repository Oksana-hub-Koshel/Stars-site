import React from 'react';
import {Navigate} from "react-router-dom"

const SecretPage = ({isLogged}) => {
    if (isLogged) {
        return (
            <div className="block_list">
                <h2>This secret page</h2>
            </div>

        )
    }
    return (
        <Navigate to="/login" />
    );
};

export default SecretPage;