import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent, Button, CardActions } from '@material-ui/core';
import { useStyles } from './styles/useStyles';
import Dune from '../images/dune.jpeg';
import HarryPotter from '../images/harrypotter.jpeg';
import StarWars from '../images/starwars.jpeg';
interface Category {
    readonly title: string;
    readonly description: string;
    readonly imageUrl: any;
}
const categories: ReadonlyArray<Category> = [
    {
        title: 'Dune',
        description: 'From handmade still-suits to lasguns, we have it all!',
        imageUrl: Dune,
    },
    {
        title: 'Harry Potter',
        description: 'Careful. You might mistake yourself for being in Diagon Alley!',
        imageUrl: HarryPotter,
    },
    {
        title: 'Star Wars',
        description: 'Mini Yoda Plushies and lightsabers Need we say more?',
        imageUrl: StarWars,
    }
]

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
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
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
                    <Button size='small' color='primary'>
                        View
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}