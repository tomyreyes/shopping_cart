import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from '../styles/useStyles';

export const Header = (): JSX.Element => {
    const classes = useStyles();
    return (
        <AppBar position='relative' className={classes.header}>
            <Toolbar>
                <Typography variant='h6' noWrap>
                    Handmade Fandom
            </Typography>
            </Toolbar>
        </AppBar>
    );
};