import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles/useStyles';

export const Footer = (): JSX.Element => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom className={classes.footerTypography}>
                Handmade Fandom
        </Typography>
        </footer>
    );
};