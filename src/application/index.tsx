import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../store';
import { Footer } from '../components/main/Footer';
import { Header } from '../components/main/Header';
import { PageSwitcher } from '../components/main/PageSwitcher';

const store = createStore(reducer);

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
