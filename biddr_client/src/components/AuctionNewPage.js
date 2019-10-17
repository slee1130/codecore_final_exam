import React, { Component } from "react";

import NewAuctionForm from "./NewAuctionForm";
import { Auction } from "../requests";

export default class AuctionNewPage extends Component {

    createAuction = params => {
        // console.log(1111)
        Auction.create(params).then(auction => {
            this.props.history.push(`/auctions/${auction.id}`);
        });
    };

    render() {
        return (
            <main>
                <NewAuctionForm onCreateAuction={this.createAuction} />
            </main>
        );
    }
}
