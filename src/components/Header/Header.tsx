import React from 'react';
import { AppBar, Toolbar, Typography, MenuItem, IconButton, Badge } from '@material-ui/core';
import { useStyles } from '../styles/useStyles';
import { Link, useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export interface HeaderProps {
    readonly totalItemsInCart: number;
}

export const Header = (props: HeaderProps): JSX.Element => {
    const history = useHistory();
    const classes = useStyles();
    const onClick = (): void => {
        // tslint:disable-next-line: no-expression-statement
        history.push('/cart');
    };
    return (
        <AppBar position='relative' className={classes.header}>
            <Toolbar>
                <MenuItem component={Link} to='/' style={{ flex: 1 }}>
                    <Typography variant='h6' noWrap>
                        Handmade Fandom
                    </Typography>
                </MenuItem>
                <IconButton className={classes.cartIcon} onClick={onClick}>
                    <Badge badgeContent={props.totalItemsInCart} color='primary'>
                    <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};