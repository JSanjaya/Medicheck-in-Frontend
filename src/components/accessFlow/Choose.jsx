import { Button } from "@blueprintjs/core"
import React from "react"
import { useNavigate } from 'react-router-dom';

const Choose = props => {
    const navigate = useNavigate();

    const handleAbstain = (str) => {
        navigate('/abstain')
    }

    const handleTaken = (str) => {
        navigate('/taken')
    }

    return (
        <div className="choose-container">
            <div className="choose-message">
                <h1>Did you take your medication today?</h1>
            </div>
            <div className="choose-buttons">
                <Button
                    text="Yes"
                    intent="primary"
                    onClick={handleTaken}
                    className="choose-button"
                />
                <Button
                    text="No"
                    intent="primary"
                    onClick={handleAbstain}
                    className="choose-button"
                />
            </div>
        </div>
    )
}

export default Choose
