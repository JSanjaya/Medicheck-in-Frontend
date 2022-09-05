import React from "react";
import Confetti from 'react-confetti'
import { useNavigate, Navigate } from "react-router-dom";
import CreateRecord from './CreateRecord'


const Taken = () => {
    const numberOfPieces = 1000;
    const recycle = 0;
    return (
        <div>
            <p className="emoticon">🥳</p>
            <h2 className="message">Yay! Would you like to write about it?</h2>
            <Confetti
                numberOfPieces={numberOfPieces}
                recycle={recycle}
            />
            <CreateRecord answer={1}
            navigate = {useNavigate()} />
        </div>
    );
}



export default Taken;