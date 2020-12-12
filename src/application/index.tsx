import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageSwitcher } from '../components/main/page_switcher';

export const Application = (): JSX.Element => {
    return (
        <BrowserRouter>
            <PageSwitcher />
        </BrowserRouter>
    );
};
