////import React, { Component } from 'react';
////import Cards from './Cards';
////import PropTypes from 'prop-types';
////import Loading from './Loading';
////import InfiniteScroll from "react-infinite-scroll-component";


////export default class Newsitems extends Component {

////    APIkey = "8bc01474b5a947b48efba4665f6d4439";
////    constructor() {
////        super();
////        this.state = {
////            articles: [],
////            loading: true,
////            page: 1,
////            totalResults: 0,
////            isEnd: false
////        };

////    }

////    static defaultProps = {
////        country: 'us',
////        pageSize: 6,
////        category: 'business',
////        every: 'top-headlines',
////    };
////    static propTypes = {
////        country: PropTypes.string,
////        pageSize: PropTypes.number,
////        category: PropTypes.string,
////        every: PropTypes.string,
////    };

////    async componentDidMount(e) {

////        this.setState({ loading: true });

////        const currentDate = new Date(Date.now());
////        const yetDate = currentDate.toISOString().split('T')[0];

////        let url2 = `https://newsapi.org/v2/${this.props.every}?&country=${this.props.country}&category=${this.props.category}&from=${yetDate}&sortBy=publishedAt&apiKey=${this.APIkey}&pageSize=${this.props.pageSize}&page=1`;
////        try {
////            let data = await fetch(url2);

////            if (data.status === 200) {

////                let responce = await data.json();

////                let filteredArticles = responce.articles.filter(article => article.title !== "[Removed]" &&
////                    article.description !== "[Removed]" &&
////                    article.urlToImage !== null &&
////                    article.content !== "[Removed]"
////                );

////                filteredArticles = filteredArticles.map(article => ({
////                    ...article,
////                    publishedAt: new Date(article.publishedAt).toLocaleDateString("en-US", {
////                        year: "numeric",
////                        month: "long",
////                        day: "numeric",
////                    })
////                }));

////                this.setState({
////                    articles: filteredArticles,
////                    totalResults: responce.totalArticles,
////                    page: this.state.page,
////                    isEnd: e * 6 >= responce.totalResults,
////                    loading: false,
////                });

////            }
////            else {
////                this.setState({ loading: false });
////                console.error(data.status);
////            }
////        } catch (error) {
////            console.error(error);
////            this.setState({ loading: false });
////        }


////    }

////    fetchMoreData = async () => {
////        this.setState({
////            page: this.state.page + 1
////        });
////        this.setState({ loading: true });

////        const currentDate = new Date(Date.now());
////        const yetDate = currentDate.toISOString().split('T')[0];

////        let url2 = `https://newsapi.org/v2/${this.props.every}?&country=${this.props.country}&category=${this.props.category}&from=${yetDate}&sortBy=publishedAt&apiKey=${this.APIkey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

////        let data = await fetch(url2);

////        let responce = await data.json();

////        this.setState({
////            articles: this.state.articles.concat(responce.articles),
////            totalResults: responce.totalArticles,
////            page: this.state.page,

////            loading: false,
////        });

////    }

////    render() {


////        return (
////            <>

////                <div className="text-center">
////                    {this.state.loading ? <Loading /> : null}
////                </div>
////                <div className="container my-4 text-center">

////                    <InfiniteScroll
////                        dataLength={this.state.articles.length}
////                        next={this.fetchMoreData}
////                        hasMore={this.state.articles.length < this.state.totalResults}
////                        loader={<Loading />}
////                        scrollableTarget="scrollableDiv"
////                    >

////                        <div className="row">
////                            {this.state.articles.map((e, index) => {


////                                return <div className="col-md-4 my-2" key={index}>

////                                    <Cards title={<strong>{e.title}</strong>} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} pubDate={e.publishedAt} />

////                                </div>
////                            })}
////                        </div>
////                    </InfiniteScroll>

////                </div>

////            </>
////        );
////    }
////}

//import React, { Component } from 'react';
//import Cards from './Cards';
//import PropTypes from 'prop-types';
//import Loading from './Loading';
//import InfiniteScroll from "react-infinite-scroll-component";

//export default class Newsitems extends Component {
//    APIkey = "8bc01474b5a947b48efba4665f6d4439";

//    constructor() {
//        super();
//        this.state = {
//            articles: [],
//            loading: true,
//            page: 1,
//            totalResults: 0,
//        };
//    }

//    static defaultProps = {
//        country: 'us',
//        pageSize: 6,
//        category: 'business',
//        every: 'top-headlines',
//    };

//    static propTypes = {
//        country: PropTypes.string,
//        pageSize: PropTypes.number,
//        category: PropTypes.string,
//        every: PropTypes.string,
//    };

//    async componentDidMount() {
//        this.fetchData();
//    }

//    fetchData = async () => {
//        this.setState({ loading: true });

//        const currentDate = new Date().toISOString().split('T')[0];
//        const url = `https://newsapi.org/v2/${this.props.every}?country=${this.props.country}&category=${this.props.category}&from=${currentDate}&sortBy=publishedAt&apiKey=${this.APIkey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

//        try {
//            const response = await fetch(url);
//            const data = await response.json();

//            if (response.ok) {
//                const filteredArticles = data.articles
//                    .filter(article =>
//                        article.title !== "[Removed]" &&
//                        article.description !== "[Removed]" &&
//                        article.urlToImage !== null &&
//                        article.content !== "[Removed]"
//                    )
//                    .map(article => ({
//                        ...article,
//                        publishedAt: new Date(article.publishedAt).toLocaleDateString("en-US", {
//                            year: "numeric",
//                            month: "long",
//                            day: "numeric",
//                        }),
//                    }));

//                this.setState({
//                    articles: [...this.state.articles, ...filteredArticles],
//                    totalResults: data.totalResults,
//                    page: this.state.page + 1,
//                    loading: false,
//                });
//            } else {
//                console.error(`Error: ${data.message}`);
//                this.setState({ loading: false });
//            }
//        } catch (error) {
//            console.error(error);
//            this.setState({ loading: false });
//        }
//    };

//    render() {
//        return (
//            <>
//                <div className="text-center">
//                    {this.state.loading && <Loading />}
//                </div>
//                <div className="container my-4 text-center">
//                    <InfiniteScroll
//                        dataLength={this.state.articles.length}
//                        next={this.fetchData}
//                        hasMore={this.state.articles.length < this.state.totalResults}
//                        loader={<Loading />}
//                    >
//                        <div className="row">
//                            {this.state.articles.map((article, index) => (
//                                <div className="col-md-4 my-2" key={index}>
//                                    <Cards
//                                        title={<strong>{article.title}</strong>}
//                                        description={article.description}
//                                        imageUrl={article.urlToImage}
//                                        newsUrl={article.url}
//                                        pubDate={article.publishedAt}
//                                    />
//                                </div>
//                            ))}
//                        </div>
//                    </InfiniteScroll>
//                </div>
//            </>
//        );
//    }
//}
import React, { Component } from 'react';
import Cards from './Cards';
import PropTypes from 'prop-types';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newsitems extends Component {

    APIkey = "8bc01474b5a947b48efba4665f6d4439";
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            isEnd: false
        };
    }

    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'business',
        every: 'top-headlines',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        every: PropTypes.string,
    };

    async componentDidMount() {
        this.setState({ loading: true });

        const currentDate = new Date(Date.now());
        const yetDate = currentDate.toISOString().split('T')[0];

        let url = `https://newsapi.org/v2/${this.props.every}?country=${this.props.country}&category=${this.props.category}&from=${yetDate}&sortBy=publishedAt&apiKey=${this.APIkey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        try {
            let data = await fetch(url);

            if (data.status === 200) {
                let response = await data.json();

                let filteredArticles = response.articles.filter(article =>
                    article.title !== "[Removed]" &&
                    article.description !== "[Removed]" &&
                    article.urlToImage !== null &&
                    article.content !== "[Removed]"
                );

                filteredArticles = filteredArticles.map(article => ({
                    ...article,
                    publishedAt: new Date(article.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })
                }));

                this.setState({
                    articles: filteredArticles,
                    totalResults: response.totalResults,
                    loading: false,
                });
            } else {
                this.setState({ loading: false });
                console.error(data.status);
            }
        } catch (error) {
            console.error(error);
            this.setState({ loading: false });
        }
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });

        const currentDate = new Date(Date.now());
        const yetDate = currentDate.toISOString().split('T')[0];

        let url = `https://newsapi.org/v2/${this.props.every}?country=${this.props.country}&category=${this.props.category}&from=${yetDate}&sortBy=publishedAt&apiKey=${this.APIkey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        try {
            let data = await fetch(url);
            let response = await data.json();

            let filteredArticles = response.articles.filter(article =>
                article.title !== "[Removed]" &&
                article.description !== "[Removed]" &&
                article.urlToImage !== null &&
                article.content !== "[Removed]"
            );

            filteredArticles = filteredArticles.map(article => ({
                ...article,
                publishedAt: new Date(article.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            }));

            this.setState({
                articles: [...this.state.articles, ...filteredArticles], //?
                totalResults: response.totalResults,
                loading: false,
            });
        } catch (error) {
            console.error(error);
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            <>
                <div className="text-center">
                    {this.state.loading ? <Loading /> : null}
                </div>
                <div className="container my-4 text-center">
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalResults}
                        loader={<Loading />}
                        scrollableTarget="scrollableDiv"
                    >
                        <div className="row">
                            {this.state.articles.map((e, index) => (
                                <div className="col-md-4 my-2" key={index}>
                                    <Cards title={<strong>{e.title}</strong>} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} pubDate={e.publishedAt} />
                                </div>
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        );
    }
}


