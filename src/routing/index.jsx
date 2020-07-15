import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Products from "../pages/products";
import About from "../pages/about";
import Home from "../pages/home";
import NotFound from '../pages/notFound'
import ProductItem from "../pages/productItem";
import Navbar from "../components/navbar";

export default function Routing() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/Products">
                    <Products />
                </Route>
                <Route path="/product/:productName">
                    < ProductItem />
                </Route>
                <Route path="*">
                    < NotFound />
                </Route>

            </Switch>
        </Router>
    );
}
