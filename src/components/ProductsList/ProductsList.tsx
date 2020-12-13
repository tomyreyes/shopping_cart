// tslint:disable: no-expression-statement
import * as constants from '../../application/constants';
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
        if (props.categoryId === 'no-match') {
            return;
        }
        props.dispatchRequestItemsByCategory(props.categoryId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.categoryId]);
    return (
        <div>This is the Products List page.
            {props.categoryId}
            {renderProductsListBasedOnType(props.itemsForCategory)}
        </div>
    );
};

const renderProductsListBasedOnType = (itemsForCategory: ItemsList): JSX.Element => {
    if (!itemsForCategory) {
        return <div>Show initial empty component.</div>;
    }
    switch (itemsForCategory.type) {
        case constants.LOADING_ITEMS_BY_CATEGORY:
            return <div>Show loading component.</div>;
        case constants.SUCCESS_ITEMS_BY_CATEGORY:
            return <div>Show success component.</div>;
        case constants.ERROR_ITEMS_BY_CATEGORY:
            return <div>Show error component.</div>;
        case constants.INITIAL_EMPTY_ITEMS_BY_CATEGORY:
        default:
            return <div>Show initial empty component.</div>;
    }
};
