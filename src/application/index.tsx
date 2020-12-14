// tslint:disable: no-expression-statement
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Footer } from '../components/Footer';
import { HeaderConnected } from '../components/Header/HeaderConnected';
import { PageSwitcher } from '../components/PageSwitcher';
import { ApplicationSaga, buildSaga, runSaga } from '../sagas';
import { buildStore, CreatedStore } from '../application/store';
import { loadCachedDataRequest } from '../stores/dataCache';
import { CssBaseline } from '@material-ui/core';

const saga = buildSaga();
const store = buildStore(saga);

const startApplication = (applicationStore: CreatedStore, applicationSaga: ApplicationSaga): void => {
    runSaga(applicationSaga.middleware);
    applicationStore.dispatch(loadCachedDataRequest());
};

startApplication(store, saga);

export const Application = (): JSX.Element => {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <CssBaseline />
                <HeaderConnected />
                    <PageSwitcher />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};
