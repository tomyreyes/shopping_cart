import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Footer } from '../components/main/Footer';
import { Header } from '../components/main/Header';
import { PageSwitcher } from '../components/main/PageSwitcher';
import { buildSaga, runSaga } from '../sagas';
import { buildStore } from '../application/store';

const saga = buildSaga();
const store = buildStore(saga);
// tslint:disable-next-line: no-expression-statement
runSaga(saga.middleware);

export const Application = (): JSX.Element => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                    <PageSwitcher />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};
