import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Categories } from '../Categories';
import { ProductsList } from '../ProductsList';
import { ProductDetails } from '../ProductDetails';
import { Cart } from '../Cart';
import { PageNotFound } from '../PageNotFound';

export const PageSwitcher = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path='/' render={Home} />
            <Route exact path='/categories' render={Categories} />
            <Route exact path='/categories/:productListId' render={ProductsList} />
            <Route exact path='/product/:productId' render={ProductDetails}/>
            <Route exact path='/cart' render={Cart} />
            <Route component={PageNotFound} />
        </Switch>
    );
};