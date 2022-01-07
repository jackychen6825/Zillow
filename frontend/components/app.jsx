import React from "react";
import HeaderContainer from "./header/header_container"; 
import Modal from './modal/modal';
import SearchContainer from './search/search_container';
import { Route, Switch, Link } from "react-router-dom";
import PropertyFormContainer from '../components/properties/property_form_container';
import SavedContainer from './properties/saved_container';
import SplashContainer from './splash/splash_container';
import RentalSearchContainer from './rental-search/rental-search-container';
import EditContainer from './properties/edit_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <HeaderContainer />
        </header>

        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <Route exact path='/buy' component={SearchContainer} />
            <Route exact path='/rental' component={RentalSearchContainer} />
            <Route exact path='/saved' component={SavedContainer} />
            <Route exact path='/edit' component={EditContainer} />
            <Route exact path='/properties/new' component={PropertyFormContainer} />
        </Switch>
            
    </div>
);
            
export default App; 
