import React, { Component } from 'react';
import Cards from './Cards';
import source from '../source.json';


export default class Newsitems extends Component {
        constructor(){
            super();
            this.state = {
                articles:[],  //source//internal json source.
                loading: false,
                page: page + 1,
            }
                
        }

    async componentDidMount(e) {
        let url = "https://newsapi.org/v2/everything?q=apple&from=2024-12-31&to=2024-12-31&sortBy=popularity&apiKey=8bc01474b5a947b48efba4665f6d4439&pageSize=12&page=1";
        let data = await fetch(url);
        let responce = await data.json();
        let filteredArticles = responce.articles.filter(article => article.title !== "[Removed]" && article.description !== "[Removed]" && article.urlToImage !== null && article.content !== "[Removed]");
        console.log(filteredArticles);
        this.setState({ articles:filteredArticles});   //slice is use here for sepicif range of news we want.
    }

    handleChange = () => {
        let url = "https://newsapi.org/v2/everything?q=apple&from=2024-12-31&to=2024-12-31&sortBy=popularity&apiKey=8bc01474b5a947b48efba4665f6d4439&pageSize=12&page=1";
        let data = await fetch(url);
        let responce = await data.json();
        let filteredArticles = responce.articles.filter(article => article.title !== "[Removed]" && article.description !== "[Removed]" && article.urlToImage !== null && article.content !== "[Removed]");
        console.log(filteredArticles);
        this.setState({ articles: filteredArticles });
    }



    render() {


        return (
            <>
                <div className="container my-4">
                    <div className="row">
                        {
                            this.state.articles.map((e) => {

                                return <div className="col-md-4 my-2">
                                    
                                    <Cards title={<strong>{e.title}</strong>} description={e.description} imageUrl=                 {e.urlToImage} newsUrl={e.url} />
                                </div>
                            })
                        }

                    </div>
                </div>
                <div className="container mb-2">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary my-1" onClick={this.handleChange} type="button">Next</button>
                        <button class="btn btn-primary my-1" onClick={ } type="button">Previous</button>
                    </div>
                </div>
            </>
        );
    }
}