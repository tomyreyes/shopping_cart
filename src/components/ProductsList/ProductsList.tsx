// tslint:disable: no-expression-statement
import { useEffect } from 'react';
import { RequestItemsByCategoryAction } from '../../stores/items/actions';
import { ItemsList } from '../../stores/items/types';

export interface ProductsListState {
    readonly categoryId: string;
    readonly itemsForCategory: ItemsList;
}
export interface ProductsListActions {
    readonly dispatchRequestItemsByCategory: (Id: string) => RequestItemsByCategoryAction;
}

type Props = ProductsListState & ProductsListActions;

export const ProductsList = (props: Props): JSX.Element => {
    useEffect((): void => {
        props.dispatchRequestItemsByCategory(props.categoryId);
    });
    return (
        <div>This is the Products List page.
            {props.categoryId}
        Use card collection component.
        Each card should have:
            <p>Image</p>
            <p>Name</p>
            <p>Cost</p>
            <p>Stars?</p>
        </div>
    );
};
