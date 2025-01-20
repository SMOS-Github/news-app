import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(props){
    
        //props.title use somewhere.
        //props.heading use somewhere.

        return (
            <>
                <nav className="navbar navbar-expand-lg bg-black">         
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light">SMOS NEWS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-light" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        World
                                    </Link>
                                    <ul className="dropdown-menu bg-black">
                                        <li><Link className="dropdown-item text-light" to="/science">Science</Link></li>
                                        <hr className="text-light"></hr>
                                        <li><Link className="dropdown-item text-light" to="/technology">Technology</Link></li>
                                        <li><Link className="dropdown-item text-light" to="/business">Business</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
}