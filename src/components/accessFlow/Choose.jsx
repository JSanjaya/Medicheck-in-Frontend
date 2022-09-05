import { Button } from "@blueprintjs/core"
import React from "react"
import {  useNavigate } from 'react-router-dom';

const Choose = props => {
    const navigate = useNavigate();

    const handleAbstain = (str) => {
        navigate('/abstain')
    }

    const handleTaken = (str) => {
        navigate('/taken')
    }

    return (
        <div className="container">
            <h1>Did you take your medication today?</h1>
            <Button
                text="Yes"
                intent="primary"
                onClick={handleTaken}
                />
            <Button
                text="No"
                intent="primary"
                onClick={handleAbstain}
                />
        </div>
    )
}

export default Choose
