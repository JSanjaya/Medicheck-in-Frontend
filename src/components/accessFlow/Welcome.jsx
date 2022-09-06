import { Button, Card } from "@blueprintjs/core"
import React, { useCallback, useContext, useEffect, useRef } from "react"
import { UserContext } from "../UserContext"
import Loader from "../Loader"
import { useNavigate } from 'react-router-dom';
import RenderRecords from "./RenderRecords"
import _ from "lodash"


const Welcome = () => {
    const [userContext, setUserContext] = useContext(UserContext);
    const previousList = useRef(userContext);
    const navigate = useNavigate();

    const navigateToChoose = () => {
        // 👇️ navigate to /contacts
        navigate('/choose');
    };

    const fetchUserDetails = useCallback(() => {
        fetch(process.env.REACT_APP_API_ENDPOINT + "users/me", {
            method: "GET",
            credentials: "include",
            // Pass authentication token as bearer token in header
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userContext.token}`,
            },
        }).then(async response => {
            if (response.ok) {
                const data = await response.json()
                setUserContext(oldValues => {
                    return { ...oldValues, details: data }
                })
            } else {
                if (response.status === 401) {
                    // Edge case: when the token has expired.
                    // This could happen if the refreshToken calls have failed due to network error or
                    // User has had the tab open from previous day and tries to click on the Fetch button
                    window.location.reload()
                } else {
                    setUserContext(oldValues => {
                        return { ...oldValues, details: null }
                    })
                }
            }
        })
    }, [setUserContext, userContext.token])

    useEffect(() => {
        // fetch only when user details are not present
        if (!userContext.details) {
            fetchUserDetails()

        } else if (!_.isEqual(previousList.current, userContext.details)) {
            fetchUserDetails()
            previousList.current = userContext.details;
        }
    }, [userContext.details, fetchUserDetails])

    const logoutHandler = () => {
        fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userContext.token}`,
            },
        }).then(async response => {
            setUserContext(oldValues => {
                return { ...oldValues, details: undefined, token: null }
            })
            window.localStorage.setItem("logout", Date.now())
        })
    }

    return <div >
        {userContext.details === null ? (
            "Error Loading User details"
        ) : !userContext.details ? (
            <Loader />
        ) : (
            <div className="welcome-container">
                <div className="welcome-card-container">
                    <Card elevation="1" className="card-bgcolor">
                        <div className="user-details">
                            <div>
                                <h2>
                                    Welcome&nbsp;
                                    <strong>
                                        {userContext.details.firstName}
                                        {userContext.details.lastName &&
                                            " " + userContext.details.lastName}
                                    </strong>!
                                </h2>
                            </div>
                            <div className="user-actions">
                                <Button
                                    text="New Entry"
                                    onClick={navigateToChoose}
                                    intent="success"
                                />
                                <Button
                                    text="Logout"
                                    onClick={logoutHandler}
                                    intent="warning"
                                />
                            </div>
                        </div>
                    </Card>
                </div>
                <RenderRecords records={userContext.details.records}
                    update={fetchUserDetails} />
            </div>
        )}
    </div>

}

export default Welcome
