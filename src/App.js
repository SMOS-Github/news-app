import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Newsitems from './components/Newsitems';

export default class App extends Component {
    //class veriables here.

    render() {
        
        return (
            <>
                <Navbar title="BBC NEWS" treanding="WTF"/>
               
                <Newsitems/>
            </>
        );
    }
}

