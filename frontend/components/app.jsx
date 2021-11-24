import React from "react";
import HeaderContainer from "./header/header_container"; 
import Modal from './modal/modal';

import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => (
    <div>
        <Modal />
        <header>
            <HeaderContainer />
        </header>
    </div>
);

export default App; 
