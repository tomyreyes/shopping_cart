import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from '../styles/useStyles';
import { useHistory } from 'react-router-dom';

export const Header = (): JSX.Element => {
    const history = useHistory();
    const classes = useStyles();
    const onClick = (): void => {
        // tslint:disable-next-line: no-expression-statement
        history.push('/')
    };
    return (
        <AppBar position='relative' className={classes.header}>
            <Toolbar>
                <Button onClick={onClick}>
                    <Typography variant='h6' noWrap>
                        Handmade Fandom
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};