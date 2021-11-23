import React from "react";
import GreetingContainer from "../components/greeting/greeting_container"; 
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from "../util/route_util";


const App = () => (
    <div>
        <header>
            <h1>Willow</h1>
            <GreetingContainer />
        </header>

        <Switch> 
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App; 
