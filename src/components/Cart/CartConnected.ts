import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Cart, CartActions, CartProps } from './Cart';
import { Store } from '../../stores';
import { addItem, AddItemAction, removeItem, RemoveItemAction } from '../../stores/cart/actions';
import { Item } from '../../stores/items/types';
import { selectCartItems } from '../../selectors/cart/selectCartItems';
import { selectCartCost } from '../../selectors/cart/selectCartCost';

// tslint:disable-next-line: no-any
const mapStateToProps = (store: Store): CartProps => {
    return {
        cartItems: selectCartItems(store),
        cost: selectCartCost(store),
    };
};

type Action = AddItemAction | RemoveItemAction;

const mapDispatchToProps = (dispatch: Dispatch<Action>): CartActions => ({
    addItem: (item: Item): AddItemAction => dispatch(addItem(item)),
    removeItem: (item: Item): RemoveItemAction => dispatch(removeItem(item)),
});

export const CartConnected = connect(mapStateToProps, mapDispatchToProps)(Cart);