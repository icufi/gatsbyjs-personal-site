import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>copyright &copy; {new Date().getFullYear()}
        <span>MaxGirteit</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
