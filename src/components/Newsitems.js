import React, { Component } from 'react';
import Cards from './Cards';
import source from '../source.json';
import Loading from './Loading';

export default class Newsitems extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],  //source//internal json source.
            loading: true,
            page: 1,
            totalResults: 0,
            isEnd: false
        }
    }
    async componentDidMount(e) {
       
        { this.setState({ loading: true }) }

        let url = "https://newsapi.org/v2/everything?q=apple&from=2024-12-31&to=2024-12-31&sortBy=popularity&apiKey=8bc01474b5a947b48efba4665f6d4439&pageSize=12&page=1";

        let url2 = "https://newsapi.org/v2/everything?q=all&from=2024-12-06&sortBy=publishedAt&apiKey=8bc01474b5a947b48efba4665f6d4439&pageSize=12&page=1";
        try {
            let data = await fetch(url2);
            if (data.status === 200) {

                let responce = await data.json();
                let filteredArticles = responce.articles.filter(article => article.title !== "[Removed]" && article.description !== "[Removed]" && article.urlToImage !== null && article.content !== "[Removed]");
                console.log(filteredArticles);
                this.setState({
                    articles: filteredArticles,   //slice is use here for sepicif range of news we want.
                    totalResults: responce.totalArticles,
                    page: this.state.page,
                    isEnd: e * 12 >= responce.totalResults,
                    loading: false,
                });

            }
            else {
                this.setState({ loading: false });
                console.error("Error: Non-200 status", data.status);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    }


    handleChange = async () => {



        { this.setState({ loading: true }) }
        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-12-31&to=2024-12-31&sortBy=popularity&apiKey=8bc01474b5a947b48efba4665f6d4439&pageSize=12&page=${this.state.page + 1}`;

        let url2 = `https://newsapi.org/v2/everything?q=all&from=2024-12-06&sortBy=publishedAt&apiKey=8bc01474b5a947b48efba4665f6d4439&pageSize=12&page=${this.state.page+1}`;
        try {
            let data = await fetch(url2);
            if (data.status === 200) {
                let responce = await data.json();
                let filteredArticles = responce.articles.filter(article => article.title !== "[Removed]" && article.description !== "[Removed]" && article.urlToImage !== null && article.content !== "[Removed]");

                this.setState({
                    articles: filteredArticles,
                    page: this.state.page + 1,
                    isEnd: (this.state.page + 1) * 12 >= responce.totalResults,
                    loading: false, // Hide loading indicator
                });
            } else {
                this.setState({ loading: false });
                console.error("Error: Non-200 status", data.status);
            }
            
        }
        catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
       



    }
    handleChangePrev = async () => {
        { this.setState({ loading: true }) }
        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-12-31&to=2024-12-31&sortBy=popularity&apiKey=8bc01474b5a947b48efba4665f6d4439&pageSize=12&page=${this.state.page - 1}`;
        let url2 = `https://newsapi.org/v2/everything?q=all&from=2024-12-06&sortBy=publishedAt&apiKey=8bc01474b5a947b48efba4665f6d4439&pageSize=12&page=${this.state.page + 1}`;
        try {

            let data = await fetch(url2);
            if (data.status === 200) {
                let responce = await data.json();
                let filteredArticles = responce.articles.filter(article => article.title !== "[Removed]" && article.description !== "[Removed]" && article.urlToImage !== null && article.content !== "[Removed]");

                this.setState({
                    articles: filteredArticles,
                    page: this.state.page - 1,
                    isEnd: false,
                    loading: false, // Hide loading indicator
                });
            }
            else {
                this.setState({ loading: false });
                console.error("Error: Non-200 status", data.status);
            }
            
        }
        catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    }


    render() {


        return (
            <>
                <div className="text-center">
                    {this.state.loading ? <Loading /> : null}
                </div>
                <div className="container my-4">
                    <div className="row">
                        {
                            this.state.articles.map((e) => {

                                return <div className="col-md-4 my-2">

                                    <Cards title={<strong>{e.title}</strong>} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} />
                                </div>
                            })
                        }

                    </div>
                </div>
                <div className="container mb-2">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary my-1" disabled={this.isEnd} onClick={this.handleChange} type="button">Next</button>
                        <button class="btn btn-primary my-1" disabled={this.state.page <= 1} onClick={this.handleChangePrev} type="button">Previous</button>
                    </div>
                </div>
            </>
        );
    }
}