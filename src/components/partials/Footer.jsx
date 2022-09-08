import React from "react"

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer className="welcome-footer">
      <p>Copyright © John Sanjaya {date}</p>
      <a href = "https://www.codingdeft.com/posts/react-authentication-mern-node-passport-express-mongo/"
      >Login and Register functionality taken from here</a>
    </footer>
  )
}

export default Footer