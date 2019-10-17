
import React from 'react';

function BidForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        const newBid = {
            price: formData.get("price"),
            auction_id: props.auction_id

        };
        props.onCreateBid(newBid);
        currentTarget.reset();
    }
    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <input
                    type="number"
                    name="price"
                    id="price"
                />
            </div>
            <button className="ui button" type="submit">
                New Bid
            </button>
        </form >
    );
}

export default BidForm;

