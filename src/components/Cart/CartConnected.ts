import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Cart, CartActions, CartProps } from './Cart';
import { Store } from '../../stores';
import { removeItem, RemoveItemAction } from '../../stores/cart/actions';
import { Item } from '../../stores/items/types';
import { selectCartItems } from '../../selectors/cart/selectCartItems';
import { selectCartCost } from '../../selectors/cart/selectCartCost';

const mapStateToProps = (store: Store): CartProps => {
    return {
        cartItems: selectCartItems(store),
        cost: selectCartCost(store),
    };
};

type Action = RemoveItemAction;

const mapDispatchToProps = (dispatch: Dispatch<Action>): CartActions => ({
    removeItem: (item: Item): RemoveItemAction => dispatch(removeItem(item)),
});

export const CartConnected = connect(mapStateToProps, mapDispatchToProps)(Cart);