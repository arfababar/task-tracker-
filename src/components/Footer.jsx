import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <p>
            &copy; 2025 Task Tracker
        </p>
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer