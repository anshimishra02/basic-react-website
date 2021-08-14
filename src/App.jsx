import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Destinations from './components/Destinations';
import Navbar from './components/Navbar';
import { Switch,Route, Redirect } from "react-router-dom";
import Footer from './components/Footer';


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
        <Footer />
        </>
    );
};

export default App;