import React from "react";
import HeaderContainer from "./header/header_container"; 
import Modal from './modal/modal';
import SearchContainer from './search/search_container';
import { Route, Switch, Link } from "react-router-dom";
import { ProtectedRoute } from "../util/route_util";
import PropertyFormContainer from '../components/properties/property_form_container';
import PropertyShowContainer from './properties/property_show_container';
import SavedContainer from './properties/saved_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <HeaderContainer />
        </header>

        <Switch>
            <Route exact path='/' component={SearchContainer} />
            <Route exact path='/saved' component={SavedContainer} />
            <Route exact path='/properties/new' component={PropertyFormContainer} />
        </Switch>
            
    </div>
            );
            
            // <Route exact path='/properties/:propertyId' component={PropertyShowContainer} />
export default App; 
