import React from "react";
import { Route, Redirect } from "react-router-dom";
import { User } from "../requests";
import { Session } from "../requests";

const Authenticator = props => {
    const {
        isAuthenticated = false,
        render,
        component: Component,
        ...restProps
    } = props;
    console.log(isAuthenticated);
    console.log(props);
    return (
        <Route
            {...restProps}
            render={routeProps => {
                if (true) {
                    return <Component {...routeProps} />
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    );
};

export default Authenticator;
