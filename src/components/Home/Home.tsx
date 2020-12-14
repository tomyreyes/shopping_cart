// tslint:disable: no-expression-statement
import { useEffect } from 'react';
import { RequestItemsByCategoryAction } from '../../stores/items/actions';

export interface HomeActions {
    readonly dispatchRequestItemsByCategory: (categoryId: string) => RequestItemsByCategoryAction;
}

type Props = HomeActions;

export const Home = (props: Props): JSX.Element => {
    const preventDispatch = true
    useEffect((): void => {
        if (preventDispatch) {
            return;
        }
        props.dispatchRequestItemsByCategory('starwars');
    });

    return (
            <div>This is the home page.
            Featured product list will be rendered here.
            </div>
    );
};