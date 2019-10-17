import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User, Session, Auction } from "./requests";
import WelcomePage from "./components/WelcomePage";
import AuctionIndexPage from "./components/AuctionIndexPage"
import NavBar from "./components/NavBar";
import SignInPage from "./components/SignInPage";
import Authenticator from "./components/Authenticator";
import AuctionShowPage from "./components/AuctionShowPage";
import AunctionNewPage from "./components/AuctionNewPage";
// import NewAuctionForm from "./components/NewAuctionForm"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    }
    this.getUser = this.getUser.bind(this);
  }
  getUser = () => {

    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  signOut = () => {
    Session.destroy().then(() => {
      this.setState({
        currentUser: null
      });
    });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.getUser();

  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser)
    return (
      <BrowserRouter>
        <NavBar currentUser={currentUser} onSignOut={this.signOut} />
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/auctions" exact component={AuctionIndexPage} />
          <Authenticator isAuthenticated={currentUser} path="/auctions/new" component={AunctionNewPage} />
          {/* <Route path="/auction/new" exact component={AunctionNewPage} /> */}
          <Route
            path="/auctions/:id"
            render={routeProps => (
              <AuctionShowPage
                {...routeProps}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            path="/login"

            render={routeProps => (
              <SignInPage onSignIn={this.getUser} {...routeProps} />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;


