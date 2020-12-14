import React from 'react';
import { AppBar, Toolbar, Typography, MenuItem, IconButton, Badge } from '@material-ui/core';
import { useStyles } from '../styles/useStyles';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Header = (): JSX.Element => {
    const classes = useStyles();
    return (
        <AppBar position='relative' className={classes.header}>
            <Toolbar>
                <MenuItem component={Link} to='/' style={{ flex: 1}}>
                    <Typography variant='h6' noWrap>
                        Handmade Fandom
                    </Typography>
                </MenuItem>
                <IconButton className={classes.cartIcon}>
                    <Badge badgeContent={3} color='primary'>
                    <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};