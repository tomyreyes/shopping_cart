// tslint:disable: no-expression-statement
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RequestItemsByCategoryAction } from '../../stores/items/actions';
import { ItemsList } from '../../stores/items/types';
import { determineCategoryByUrlParameter, UrlParameters } from './determineCategoryByUrlParameter';

export interface ProductsListStore {
    readonly interface: ItemsList;
}
export interface ProductsListActions {
    readonly dispatchRequestItemsByCategory: (Id: string) => RequestItemsByCategoryAction;
}

type Props = ProductsListActions;

export const ProductsList = (props: Props): JSX.Element => {
    const urlParameters = useParams<UrlParameters>();
    const categoryId = determineCategoryByUrlParameter(urlParameters);
    useEffect((): void => {
        if (categoryId === 'no-match') {
            return;
        }
        props.dispatchRequestItemsByCategory(categoryId);
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
