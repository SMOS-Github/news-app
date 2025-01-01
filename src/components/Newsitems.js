import React, { Component } from 'react';
import Cards from './Cards';
import source from '../source.json';


export default class Newsitems extends Component {
        constructor(){
            super();
            this.state = {
                articles: source,  //internal json source.
                loading: false
            }
                
        }
    render() {


        return (
            <>
                <div className="container my-4">
                    <div className="row">
                        {
                            this.state.articles.map((e) => {

                                return  <div className="col-md-4 my-2">
                                    <Cards title={<b>{e.title}</b>} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} />
                                </div>
                            })
                        }

                    </div>
                </div>
            </>
        );
    }
}