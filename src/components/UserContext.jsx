// Code taken from https://github.com/collegewap/mern-auth-client

import React, { useState } from "react"

const UserContext = React.createContext([{}, () => {}])

let initialState = {}

const UserProvider = props => {
  const [state, setState] = useState(initialState)

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
