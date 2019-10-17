import React from "react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";



function NavBar(props) {
    const { currentUser, onSignOut } = props;
    const handleSignOutClick = event => {
        event.preventDefault();

        if (typeof onSignOut === "function") {
            onSignOut();
        }
    };
    console.log(currentUser);
    return (

        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 30px"
        }}>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/auctions">Auctions </NavLink>
            <NavLink to="/auctions/new">New Auction</NavLink>
            {currentUser ? (
                <>
                    <span>Welcome {currentUser.username}</span>
                    <a href="#logout" onClick={handleSignOutClick}>
                        Sign Out
                     </a>
                </>
            ) : (
                    <>
                        <NavLink to="/login">Sign In</NavLink>
                    </>
                )}
        </nav>
    );
}



export default NavBar;