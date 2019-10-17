import React from "react";
import { Session } from "../requests";

function SignInPage(props) {
    function signIn(event) {
        event.preventDefault();
        const { history } = props;
        const formData = new FormData(event.currentTarget);

        Session.create({
            email: formData.get("email"),
            password: formData.get("password")
        }).then(() => { history.push('/') })
    }
    return (
        <main className="ui form">
            <form onSubmit={signIn}>
                <div>
                    <h3>Please Sign in with this id: dionne@example.com pw: 123</h3>
                    <label htmlFor="email">Email</label> <br />
                    <input id="email" name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input id="password" name="password" type="password" />
                </div>
                <input type="submit" value="Login" />
            </form>
        </main>
    )
}
export default SignInPage;