import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeConnected } from '../Home/HomeConnected';
import { Categories } from '../Categories';
import { ProductsListConnected } from '../ProductsList/ProductsListConnected';
import { ProductDetails } from '../ProductDetails';
import { CartConnected } from '../Cart/CartConnected';
import { PageNotFound } from '../PageNotFound';

export const PageSwitcher = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path='/' component={HomeConnected} />
            <Route exact path='/categories' render={Categories} />
            <Route exact path='/categories/:categoryId' component={ProductsListConnected} />
            <Route exact path='/product/:productId' render={ProductDetails}/>
            <Route exact path='/cart' component={CartConnected} />
            <Route component={PageNotFound} />
        </Switch>
    );
};