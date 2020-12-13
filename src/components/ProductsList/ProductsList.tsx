// tslint:disable: no-expression-statement
import { useEffect } from 'react';
import { RequestItemsByCategoryAction } from '../../stores/items/actions';

export interface ProductsListActions {
    readonly dispatchRequestItemsByCategory: (Id: string) => RequestItemsByCategoryAction;
}

type Props = ProductsListActions;

export const ProductsList = (props: Props): JSX.Element => {
    useEffect((): void => {
        props.dispatchRequestItemsByCategory('Harry Potter');
    });
    return (
        <div>This is the Products List page.
        Use card collection component.
        Each card should have:
            <p>Image</p>
            <p>Name</p>
            <p>Cost</p>
            <p>Stars?</p>
        </div>
    );
};