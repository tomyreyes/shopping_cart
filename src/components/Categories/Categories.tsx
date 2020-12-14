import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent, Button, CardActions } from '@material-ui/core';
import { useStyles } from '../styles/useStyles';
import { categories, Category } from './categoriesList';
import { useHistory } from 'react-router-dom';

export const Categories = (): JSX.Element => {
    const classes = useStyles();
    return(
        <div style={{ marginBottom: 300 }}>
            <Container maxWidth='sm'>
                <Typography component='h1' variant='h2' align='center' gutterBottom className={classes.categoryTitleText}>
                    Categories
                    </Typography>
            </Container>
            <Container maxWidth='md'>
                <Grid container spacing={4}>
                    {categories.map((category: Category): JSX.Element => (
                        CategoryCard(category)
                    ))}
                </Grid>
            </Container>
        </div>
    )
};

const CategoryCard = (category: Category): JSX.Element => {
    const history = useHistory();
    const classes = useStyles();
    const onClick = (): void => {
        // tslint:disable-next-line: no-expression-statement
        history.push(category.path);
    };
    return (
        <Grid key={category.title} item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={category.imageUrl}
                    title={category.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {category.title}
                    </Typography>
                    <Typography>
                        {category.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary' onClick={onClick}>
                        View Products
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}