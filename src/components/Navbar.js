import React from 'react'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </>
    )
}
