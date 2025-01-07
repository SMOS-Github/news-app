import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Newsitems from './components/Newsitems';
import {Routes,Route } from 'react-router-dom';
export default class App extends Component {
    //class veriables here.

    render() {
        
        return (
            <>
                <Navbar title="BBC NEWS"/>
               
                <Newsitems pageSize={9} country="us" every="top-headlines" category="business"/>
            </>
        );
    }
}

