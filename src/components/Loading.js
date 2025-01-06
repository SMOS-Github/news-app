import React, { Component } from 'react';
import load from '../load.gif';

export default class Loading extends Component {
    render() {
        return (
            <>
                <img src={load} alt="Loading" height="100" width="100" />
            </>
        );
    }
}