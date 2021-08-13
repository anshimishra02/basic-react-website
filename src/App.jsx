import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Destinations from './Destinations';
import Navbar from './Navbar';
import { Switch,Route, Redirect } from "react-router-dom";


const App =() => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  exact path="/About" component={About}/>
            <Route exact path="/Destinations" component={Destinations}/>
            <Route exact path="/Contact" component={Contact}/>
            <Redirect to="/" /> 
            <Home />
        </Switch>
        </>
    );
};

export default App;