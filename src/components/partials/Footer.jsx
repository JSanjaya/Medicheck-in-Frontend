import React from "react"

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright © John Sanjaya {date}</p>
    </div>
  )
}

export default Footer