import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RequestItemsByCategoryAction, requestItemsByCategory } from '../../stores/items/actions';
import { ProductsList, ProductsListActions, ProductsListState } from './ProductsList';
import { Store } from '../../stores';
import { RouteComponentProps } from 'react-router-dom';
import { determineValidCategoryId } from './helpers';
import { selectItemsForCategory } from '../../selectors/items/selectItemsForCategory';
import { selectLastUpdatedForCategory } from '../../selectors/items/selectLastUpdatedForCategory';
import { AddItemAction, addItem } from '../../stores/cart/actions';
import { Item } from '../../stores/items/types';

type Action = RequestItemsByCategoryAction | AddItemAction;

// tslint:disable-next-line: no-any
const mapStateToProps = (store: Store, ownProps: RouteComponentProps<any>): ProductsListState => {
    const categoryId = determineValidCategoryId(ownProps.match.params.categoryId);
    return {
        categoryId,
        itemsForCategory: selectItemsForCategory(store, categoryId),
        lastUpdatedForCategory: selectLastUpdatedForCategory(store, categoryId),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): ProductsListActions => ({
    dispatchRequestItemsByCategory: (categoryId: string): RequestItemsByCategoryAction =>
        dispatch(requestItemsByCategory(categoryId)),
    addItem: (item: Item): AddItemAction =>
        dispatch(addItem(item)),
});

export const ProductsListConnected = connect(mapStateToProps, mapDispatchToProps)(ProductsList);