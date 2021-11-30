import React from "react";
import HeaderContainer from "./header/header_container"; 
import Modal from './modal/modal';
import SearchContainer from './search/search_container';
import { Route, Switch, Link } from "react-router-dom";
import { ProtectedRoute } from "../util/route_util";
import PropertyFormContainer from '../components/properties/property_form_container';
import PropertyShowContainer from '../components/properties/properties_show_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <HeaderContainer />
        </header>

        <Switch>
            <Route exact path='/' component={SearchContainer} />
            <Route exact path='/properties/new' component={PropertyFormContainer} />
            <Route exact path='/properties/:propertyId' component={PropertyShowContainer} />
        </Switch>

    </div>
);

export default App; 
