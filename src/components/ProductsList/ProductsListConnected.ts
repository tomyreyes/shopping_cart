import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RequestItemsByCategoryAction, requestItemsByCategory } from '../../stores/items/actions';
import { ProductsList, ProductsListActions, ProductsListState } from './ProductsList';
import { Store } from '../../stores';
import { RouteComponentProps } from 'react-router-dom';
import { determineValidCategoryId } from './determineCategoryByUrlParameter';
import { selectItemsForCategory } from '../../selectors/items/selectItemsForCategory';

type Action = RequestItemsByCategoryAction;

// tslint:disable-next-line: no-any
const mapStateToProps = (store: Store, ownProps: RouteComponentProps<any>): ProductsListState => {
    const categoryId = determineValidCategoryId(ownProps.match.params.categoryId);
    return {
        categoryId,
        itemsForCategory: selectItemsForCategory(store, categoryId),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): ProductsListActions => ({
    dispatchRequestItemsByCategory: (categoryId: string): RequestItemsByCategoryAction =>
        dispatch(requestItemsByCategory(categoryId)),
});

export const ProductsListConnected = connect(mapStateToProps, mapDispatchToProps)(ProductsList);