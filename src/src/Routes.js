import React from "react";
import {Switch} from 'react-router-dom';

import RouteHandler from "./components/RouteHandler";

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const Page = () => {
    return(
        <Switch>
            <RouteHandler exact path="/">
                <Home/>
            </RouteHandler>
            <RouteHandler exact path="/about">
                <About/>
            </RouteHandler>
            <RouteHandler>
                <NotFound/>
            </RouteHandler>
        </Switch>
    );
}

export default Page;