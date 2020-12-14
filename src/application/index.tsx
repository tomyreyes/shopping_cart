// tslint:disable: no-expression-statement
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Footer } from '../components/main/Footer';
import { Header } from '../components/main/Header';
import { PageSwitcher } from '../components/main/PageSwitcher';
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
                <Header />
                    <PageSwitcher />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};
