import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auction } from "../requests";

class AuctionIndexPage extends Component {
    state = {
        auctions: []
    }
    componentDidMount() {
        Auction.index().then(auctions => {
            this.setState({ auctions });
        })
    }
    deleteauction(id) {
        this.setState({
            auctions: this.state.auctions.filter(a => a.id !== id)
        })
    }
    render() {
        return (
            <main>
                <h2>Auctions</h2>
                <ul>
                    {this.state.auctions.map(auction => (
                        <li key={auction.id}>
                            <Link to={`/auctions/${auction.id}`}>
                                {auction.title}
                            </Link><br />
                            ${auction.reserve_price}
                            <br/>
                            posted on {auction.created_at}
                        </li>
                    ))}
                </ul>
            </main>
        )
    }

}

export default AuctionIndexPage;