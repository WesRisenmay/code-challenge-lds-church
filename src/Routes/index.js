import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Items from '../Items';
import Checkout from '../Checkout';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path ="/checkout">
                <Checkout />
            </Route>
            <Route path="/">
                <Items />
            </Route>
        </Switch>
    </BrowserRouter>
)