import Recat, { Component } from 'react';
export default class Cards extends Component {

    static defaultProps = {
        title: "No Title Available",
        description: "No Description Available",
        imageUrl: "https://via.placeholder.com/150",
        newsUrl: "#",
        pubDate: null,

    };

    render() {
        let {title,description,imageUrl,newsUrl,pubDate} = this.props;
        return (
            <>
                <div className="card w-18rem">
                    <img src={imageUrl} className="card-img-top" alt=""/>
                        <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="text-secondary">Published on: {pubDate}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>

            </>
        )
    }
}
