import React from "react";
import Confetti from 'react-confetti'
import { useNavigate } from "react-router-dom";
import CreateRecord from './CreateRecord'


const Taken = () => {
    const numberOfPieces = 1000;
    const recycle = 0;
    return (
        <div className="choices-page">
            <Confetti
                numberOfPieces={numberOfPieces}
                recycle={recycle}
            />
            <div className="emoticon-container">
                <h1 className="emoticon-size">🥳</h1>
            </div>
            <h2>Yay! Would you like to write about it?</h2>
            <CreateRecord answer={1}
                navigate={useNavigate()} />
        </div>
    );
}



export default Taken;