import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <>
                <div className="spinner-border text-primary my-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

            </>
        );
    }
}