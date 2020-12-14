// tslint:disable: no-expression-statement no-any
import * as constants from '../../application/constants';
import { useEffect } from 'react';
import { RequestItemsByCategoryAction } from '../../stores/items/actions';
import { Item, ItemsList, LastUpdated, SuccessItemsList } from '../../stores/items/types';
import { shouldRequestNewData } from './helpers';
import { useStyles } from '../styles/useStyles';
import { Container, Typography, Card, CardContent, CardMedia, Grid, CardActions, Button, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
export interface ProductsListState {
    readonly categoryId: string;
    readonly itemsForCategory: ItemsList;
    readonly lastUpdatedForCategory: LastUpdated;
}
export interface ProductsListActions {
    readonly dispatchRequestItemsByCategory: (Id: string) => RequestItemsByCategoryAction;
}

type Props = ProductsListState & ProductsListActions;

export const ProductsList = (props: Props): JSX.Element => {
    const history = useHistory();
    useEffect((): void => {
        if (!shouldRequestNewData(props.lastUpdatedForCategory, props.categoryId)) {
            return;
        }
        props.dispatchRequestItemsByCategory(props.categoryId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.categoryId]);
    const classes = useStyles();
    const onClick = (id: number): void => {
        history.push(`/product/${id}`);
    };
    return (
        <div>
            <Container maxWidth='sm'>
                <Typography component='h1' variant='h2' align='center' gutterBottom className={classes.categoryTitleText}>
                    {props.categoryId.toUpperCase()}
                </Typography>
            </Container>
            {renderProductsListBasedOnType(props.itemsForCategory, classes, onClick)}
        </div>
    );
};

const renderProductsListBasedOnType = (itemsForCategory: ItemsList, classes: any, onClick: (id: number) => void): JSX.Element => {
    if (!itemsForCategory) {
        return <div>Show initial empty component.</div>;
    }
    switch (itemsForCategory.type) {
        case constants.LOADING_ITEMS_BY_CATEGORY:
            return renderLoadingComponent(classes);
        case constants.SUCCESS_ITEMS_BY_CATEGORY:
            return renderSuccessComponent(itemsForCategory, classes, onClick);
        case constants.ERROR_ITEMS_BY_CATEGORY:
            return renderErrorComponent(classes);
        case constants.INITIAL_EMPTY_ITEMS_BY_CATEGORY:
        default:
            return <div>Show initial empty component.</div>;
    }
};

const renderSuccessComponent = (itemsForCategory: SuccessItemsList, classes: any, onClick: (id: number) => void): JSX.Element => (
    <Container maxWidth='md'>
        <Grid container spacing={4}>
            {
                itemsForCategory.items.map((item: Item): JSX.Element => (
                    renderItem(item, classes, onClick)
                ))}
        </Grid>
    </Container>
);

const renderItem = (item: Item, classes: any, onClick: (id: number) => void): JSX.Element => (
    <Grid key={item.id} item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={item.imageProperties.mediumUrl}
                title={item.title}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5' component='h2'>
                    {item.title}
                </Typography>
                <Typography>
                    Price: ${item.price}
                </Typography>
                    <Typography>
                        Views: {item.views}
                    </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary' onClick={(): void => onClick(item.id)}>
                    View Details
                    </Button>
            </CardActions>
        </Card>
    </Grid>
);

const renderErrorComponent = (classes: any): JSX.Element => (
    <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center' gutterBottom className={classes.categoryTitleText}>
            We're sorry. The products you are trying to view are currently unavailable.
        </Typography>
    </Container>
);

const renderLoadingComponent = (classes: any): JSX.Element => (
    <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center' gutterBottom className={classes.heroText}>
            Please wait.
        </Typography>
        <CircularProgress/>
    </Container>
)