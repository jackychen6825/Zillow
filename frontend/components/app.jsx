import React from "react";
import GreetingContainer from "../components/greeting/greeting_container"; 
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Header from "./header/header";

import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer /> 
        </header>
    </div>
);

export default App; 
