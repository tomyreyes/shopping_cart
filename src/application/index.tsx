import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/main/Footer';
import { Header } from '../components/main/Header';
import { PageSwitcher } from '../components/main/PageSwitcher';

export const Application = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Header />
                <PageSwitcher />
            <Footer />
        </BrowserRouter>
    );
};
