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
                <Routes>
                    <Route excat path="/" element={<Newsitems key="general"  pageSize={9} country="us" every="top-headlines" category="general" />} />
                    <Route excat path="/entertainment" element={<Newsitems key="entertainment" pageSize={9} country="us" every="top-headlines" category="entertainment" />} />
                    <Route excat path="/health" element={<Newsitems key="health" pageSize={9} country="us" every="top-headlines" category="health" />} />
                    <Route excat path="/science" element={<Newsitems key="science" pageSize={9} country="us" every="top-headlines" category="science" />} />
                    <Route excat path="/technology" element={<Newsitems key="technology" pageSize={9} country="us" every="top-headlines" category="technology" />} />
                    <Route excat path="/business" element={<Newsitems key="business" pageSize={9} country="us" every="top-headlines" category="business" />} />
                    <Route excat path="/sports" element={<Newsitems key="sports" pageSize={9} country="us" every="top-headlines" category="sports" />} />
                </Routes>
            </>
        );
    }
}

