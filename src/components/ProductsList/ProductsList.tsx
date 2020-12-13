// tslint:disable: no-expression-statement
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RequestItemsByCategoryAction } from '../../stores/items/actions';

export interface ProductsListActions {
    readonly dispatchRequestItemsByCategory: (Id: string) => RequestItemsByCategoryAction;
}

type Props = ProductsListActions;

export interface UrlParameters {
    readonly categoryId: string;
}

export const ProductsList = (props: Props): JSX.Element => {
    const urlParamters = useParams<UrlParameters>();
    useEffect((): void => {
        props.dispatchRequestItemsByCategory(urlParamters.categoryId);
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