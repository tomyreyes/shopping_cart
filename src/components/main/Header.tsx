import React from 'react';
import { AppBar, Toolbar, Typography, MenuItem } from '@material-ui/core';
import { useStyles } from '../styles/useStyles';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
    const classes = useStyles();
    return (
        <AppBar position='relative' className={classes.header}>
            <Toolbar>
                <MenuItem component={Link} to='/'>
                    <Typography variant='h6' noWrap>
                        Handmade Fandom
                    </Typography>
                </MenuItem>
            </Toolbar>
        </AppBar>
    );
};