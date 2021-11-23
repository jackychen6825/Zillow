import React from "react";
import GreetingContainer from "../components/greeting/greeting_container"; 
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Header from "./header/header";
import Modal from "./modal/modal";

const App = () => (
    <div>
        <header>
            <Header />
        </header>

        <div className="App">
            <h1>Click on the button to open the modal</h1>
            <button className="openModal">Open</button>
            <Modal />
        </div>

        <Switch> 
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App; 
