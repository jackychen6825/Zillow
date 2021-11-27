import React from "react";
import HeaderContainer from "./header/header_container"; 
import Modal from './modal/modal';
import PropertyIndexContainer from '../components/properties/properties_index_container'; 
import SearchContainer from './search/search_container';

import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => (
    <div>
        <Modal />
        <header>
            <HeaderContainer />
        </header>

        <Switch>
            <Route exact path='/' component={SearchContainer} />
        </Switch>

    </div>
);

export default App; 
