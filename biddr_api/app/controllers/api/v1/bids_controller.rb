class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!

    def create
        auction = Auction.find params[:auction_id]
        bid = Bid.new params.require(:bid).permit(:price)
        bid.auction = auction
        bid.user = current_user

        bid.save!
        render json: { id: bid.id }
  end

end
