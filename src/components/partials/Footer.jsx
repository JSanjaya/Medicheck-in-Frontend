import React from "react"

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer className="welcome-footer">
      <p>Copyright © John Sanjaya {date}</p>
  
    </footer>
  )
}

export default Footer