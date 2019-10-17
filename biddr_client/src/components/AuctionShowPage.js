import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auction } from "../requests";
import { Bid } from "../requests";
import AuctionIndexPage from "./AuctionIndexPage";
import BidForm from "./BidForm";
import BidList from "./BidList";


export class AuctionShowPage extends Component {

    constructor(props) {
    super(props)
    this.state = {
        auction: null
    }
}
    componentDidMount() {
        const id = this.props.match.params.id;
        Auction.show(id).then(auction => {
            this.setState({ auction });
        })
    }

    onCreateBid= params => {
        let id = this.props.match.params.id
        Bid.create(params, id).then(bid => {
            window.location=window.location
        })
    }


    render() {
        const { auction } = this.state;
        if (!this.state.auction) {
            return <h1>Loading...please wait :( </h1>
        }
        return (
            <main>
                <h1>{auction.title}</h1>
                <p>{auction.description}</p>
                <p>Expires at: {auction.end_at}</p>
                <p>Reserve Price: {auction.price}</p>
                <BidForm onCreateBid={this.onCreateBid} />
                <h2>Previous Bids</h2>
                <BidList
                    bids={this.state.auction.bids}
                />
            </main>
        )

    }

}










export default AuctionShowPage;


