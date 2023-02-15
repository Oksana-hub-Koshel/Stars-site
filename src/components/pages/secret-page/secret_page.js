import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../hooks/useAuth";


const SecretPage = () => {
    const navigate=useNavigate()
    const {signOut}=useAuth()
    return (
        <div className="outlet">
            <div className="block_list">
                <h2>This secret page</h2>
                <button onClick={()=> signOut(()=> navigate("/", {replace:true}))}>Sign Out</button>
            </div>

        </div>

        )


};

export default SecretPage;