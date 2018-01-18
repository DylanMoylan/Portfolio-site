import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header>
      <div className="logo"><Link to="/">Dylan Moylan</Link></div>
      <div className="header-links">
        <a href="resume.html"><span>Resume</span></a>
        <Link to="/"><span>Work</span></Link>
        <Link to="/about"><span>About</span></Link>
      </div>
    </header>
  )
}

export default Header
