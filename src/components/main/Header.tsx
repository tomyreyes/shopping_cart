import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header = (): JSX.Element => (
    <AppBar position='relative'>
        <Toolbar>
            <Typography variant='h6' noWrap>
                Handmade Fandom
            </Typography>
        </Toolbar>
    </AppBar>
);