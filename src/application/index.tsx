import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageSwitcher } from '../components/main/PageSwitcher';

export const Application = (): JSX.Element => {
    return (
        <BrowserRouter>
            <PageSwitcher />
        </BrowserRouter>
    );
};
