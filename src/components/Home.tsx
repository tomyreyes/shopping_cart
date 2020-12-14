// tslint:disable: no-expression-statement
import { RequestItemsByCategoryAction } from '../stores/items/actions';
import { Typography, Container } from '@material-ui/core';
import { useStyles } from './styles/useStyles';
import { Categories } from './Categories/Categories';

export interface HomeActions {
    readonly dispatchRequestItemsByCategory: (categoryId: string) => RequestItemsByCategoryAction;
}

type Props = HomeActions;

export const Home = (props: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.heroContent}>
                <Container maxWidth='sm'>
                    <Typography component='h1' variant='h2' align='center' gutterBottom className={classes.heroText}>
                        Collect handemade memorabilia.
                    </Typography>
                    <div style={{ marginBottom: 100 }}>
                        <Typography variant='h5' align='center' paragraph className={classes.heroText}>
                                Explore our handcrafted products as we aim to fill our customers shelves with high quality,
                                top of the line and meticulously crafted items based off of your favourite series.
                        </Typography>
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    );
};