import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { ProductsListConnected } from './ProductsList/ProductsListConnected';
import { CartConnected } from './Cart/CartConnected';
import { PageNotFound } from './PageNotFound';

export const PageSwitcher = (): JSX.Element => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/categories/:categoryId' component={ProductsListConnected} />
        <Route exact path='/cart' component={CartConnected} />
        <Route component={PageNotFound} />
    </Switch>
);