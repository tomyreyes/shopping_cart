import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RequestItemsByCategoryAction, requestItemsByCategory } from '../../stores/items/actions';
import { ProductsList, ProductsListActions } from './ProductsList';

type Action = RequestItemsByCategoryAction;

const mapDispatchToProps = (dispatch: Dispatch<Action>): ProductsListActions => ({
    dispatchRequestItemsByCategory: (categoryId: string): RequestItemsByCategoryAction =>
        dispatch(requestItemsByCategory(categoryId)),
});

export const ProductsListConnected = connect(undefined, mapDispatchToProps)(ProductsList);