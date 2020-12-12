import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Cart } from '../Cart';
import { Categories } from '../Categories';
import { ProductDetails } from '../ProductDetails';
import { ProductsList } from '../ProductsList';
import { Home } from './Home';

export const PageSwitcher = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path='/' render={Home} />
            <Route exact path='/categories' render={Categories} />
            <Route exact path='categories/:productListId' render={ProductsList} />
            <Route exact pathj='product/productId' render={ProductDetails}/>
            <Route exact path='/cart' render={Cart} />
        </Switch>
    );
};