import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import CreateRecord from './CreateRecord'


const Abstain = () => {
    return (
        <div>
            <p className="emoticon">🙂</p>
            <h2 className="message2">That's okay! Would you like to write about it?</h2>         
            <CreateRecord answer={0}
            navigate = {useNavigate()} />
        </div>
    );
}



export default Abstain;