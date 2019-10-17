# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Auction.destroy_all
Bid.destroy_all
User.destroy_all

NUM_AUCTIONS = 20
NUM_USERS = 10
PASSWORD = "123"

NUM_USERS.times do
    username = Faker::Name.first_name
    User.create(
        username: username,
        email:  "#{username.downcase}@example.com",
        password: PASSWORD
    )

end
users = User.all

NUM_AUCTIONS.times do
    created_at = Faker::Date.backward(days: 365 * 5)
    auction = Auction.create(
        title: Faker::Hacker.say_something_smart,
        description: Faker::ChuckNorris.fact,
        end_at: created_at,
        reserve_price: rand(100_000),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
    rand(0..30).times do
     bid =  Bid.create(
            price: rand(10_000),
            created_at: created_at,
            auction_id: auction.id,
            user: users.sample
        )
    end
end

auctions = Auction.all
bids = Bid.all



puts Cowsay.say("Generated #{auctions.count} auctions", :frogs)
puts Cowsay.say("Generated #{bids.count} bids", :stegosaurus)
puts Cowsay.say("Generated #{users.count} users", :tux)