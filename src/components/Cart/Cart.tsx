// tslint:disable: no-expression-statement no-any
import { RemoveItemAction } from '../../stores/cart/actions';
import { Item } from '../../stores/items/types';
import { Container, Typography, Card, CardContent, CardMedia, Grid, CardActions, Button} from '@material-ui/core';
import { useStyles } from '../styles/useStyles';

export interface CartProps {
    readonly cartItems: ReadonlyArray<Item>;
    readonly cost: number;
}

export interface CartActions {
    readonly removeItem: (item: Item) => RemoveItemAction;
}

type Props = CartProps & CartActions;

export const Cart = (props: Props): JSX.Element => {
    const classes = useStyles();
    const onClick = (item: Item): void => {
        props.removeItem(item);
    };
    return (
        <div style={{ marginBottom: props.cartItems.length === 0 ? 800 : 600  }}>
            <Container maxWidth='sm'>
                <Typography component='h1' variant='h2' align='center' gutterBottom className={classes.categoryTitleText}>
                    Cart
                </Typography>
            </Container>
            <CartItems cartItems={props.cartItems} cost={props.cost} classes={classes} onClick={onClick}/>
        </div>
    );
};

interface CartItemsProps {
    readonly cartItems: ReadonlyArray<Item>;
    readonly cost: number;
    readonly classes: any;
}
interface CartItemsActions {
    readonly onClick: (item: Item) => void;
}

const CartItems = (props: CartItemsProps & CartItemsActions): JSX.Element => {
    if (props.cartItems.length === 0) {
        return (
        <Container maxWidth='sm'>
            <Typography component='h1' variant='h3' align='center' gutterBottom className={props.classes.categoryTitleText}>
                No items in your cart.
                </Typography>
        </Container>
        );
    }
    return (
        <Container maxWidth='md'>
            <Grid container spacing={4}>
                {
                    props.cartItems.map((item: Item): JSX.Element => (
                        renderCartItem(item, props.classes, props.onClick)
                    ))}
            </Grid>
            <Typography component='h2' variant='h3' align='center'gutterBottom className={props.classes.categoryTitleText}>
                Total: ${props.cost.toFixed(2)}
            </Typography>
        </Container>
    );
};

const renderCartItem = (item: Item, classes: any, onClick: (item: Item) => void): JSX.Element => (
    <Grid key={item.id} item xs={12} sm={6} md={6}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={item.imageProperties.mediumUrl}
                title={item.title}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5'>
                    {item.title}
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Price: ${item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary' onClick={(): void => onClick(item)}>
                    Remove From Cart
                    </Button>
            </CardActions>
        </Card>
    </Grid>
);