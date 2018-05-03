import React from 'react';
import ReactDOM from 'react-dom';

import { Route, IndexRoute, Switch } from "react-router-dom";

import Home from './screens/index/homeView';
import Product from './screens/product/productView';
import App from './App';

const routes = (
    <Route exact path="/" component={App}>
        <Route component={Home}/>
        <Route path="/catalog" component={Product} />
        <Route path="/about-us" />
        <Route path="/company" />
    </Route>
);

export default routes;