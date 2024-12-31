import React, { Component } from 'react';
import Cards from './Cards';
export default class Newsitems extends Component {
    render() {
        return (
            <>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-4 my-2">
                            <Cards title="Alex" description="The quick brown fox jumps over the lazy Dog." imageUrl="https://cassette.sphdigital.com.sg/image/straitstimes/7211f7c3d112c7af36582e156d55ab47f2d5c0d48b0f68053e88c6f3f17e4f30"/>
                        </div>
                        <div className="col-md-4 my-2">
                            <Cards title="Alex" description="The quick brown fox jumps over the lazy Dog." imageUrl="https://cassette.sphdigital.com.sg/image/straitstimes/7211f7c3d112c7af36582e156d55ab47f2d5c0d48b0f68053e88c6f3f17e4f30"/>
                        </div>
                        <div className="col-md-4 my-2">
                            <Cards title="Alex" description="The quick brown fox jumps over the lazy Dog." imageUrl="https://cassette.sphdigital.com.sg/image/straitstimes/7211f7c3d112c7af36582e156d55ab47f2d5c0d48b0f68053e88c6f3f17e4f30"/>
                        </div>
                        <div className="col-md-4 my-2">
                            <Cards title="Alex" description="The quick brown fox jumps over the lazy Dog." imageUrl="https://cassette.sphdigital.com.sg/image/straitstimes/7211f7c3d112c7af36582e156d55ab47f2d5c0d48b0f68053e88c6f3f17e4f30"/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}