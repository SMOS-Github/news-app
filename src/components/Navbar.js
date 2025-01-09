import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        let {title,heading} = this.props;
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">         
                    <div className="container-fluid">
                        <Link className="navbar-brand">SMOS NEWS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/sports" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        World
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <hr></hr>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}