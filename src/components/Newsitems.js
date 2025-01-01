import React, { Component } from 'react';
import Cards from './Cards';
import source from '../source.json';


export default class Newsitems extends Component {
        constructor(){
            super();
            this.state = {
                articles:[],  //source//internal json source.
                loading: false
            }
                
        }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8bc01474b5a947b48efba4665f6d4439";
        let data = await fetch(url);
        let responce = await data.json();
        console.log(responce);
        this.setState({ articles:responce.articles.slice(0,9) });   //slice is use here for sepicif range of news we want.
    }
    render() {


        return (
            <>
                <div className="container my-4">
                    <div className="row">
                        {
                            this.state.articles.map((e) => {

                                return  <div className="col-md-4 my-2">
                                    <Cards title={<strong>{e.title}</strong>} description={e.description.slice(0,100)} imageUrl={e.urlToImage} newsUrl={e.url} />
                                </div>
                            })
                        }

                    </div>
                </div>
                <div className="container">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Next</button>
                        <button class="btn btn-primary" type="button">Previous</button>
                    </div>
                </div>
            </>
        );
    }
}