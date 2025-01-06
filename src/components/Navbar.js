import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        let {title,heading} = this.props;
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">         
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">{this.props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">{this.props.treanding}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">{this.props.top}</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {this.props.world}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">{this.props.us}</a></li>
                                        <hr></hr>
                                        <li><a className="dropdown-item" href="/">{this.props.crypto}</a></li>
                                        <li><a className="dropdown-item" href="/">{this.props.sports}</a></li>
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