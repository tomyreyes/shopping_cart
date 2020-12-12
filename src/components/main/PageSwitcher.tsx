import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';

export const PageSwitcher = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path='/' render={Home} />
        </Switch>
    );
};