import React from "react";
import { useNavigate } from "react-router-dom";
import CreateRecord from './CreateRecord'


const Abstain = () => {

    return (
        <div className="choices-page">
            <div className="emoticon-container">
                <h1 className="emoticon-size">🙂</h1>
            </div>
            <h2>That's okay! Would you like to write about it?</h2>
            <CreateRecord answer={0}
                navigate={useNavigate()} />
        </div>
    );
}



export default Abstain;