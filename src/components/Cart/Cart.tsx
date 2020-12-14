import { AddItemAction, CartAction, RemoveItemAction } from '../../stores/cart/actions';
import { Item } from '../../stores/items/types';

export interface CartProps {
    readonly cartItems: ReadonlyArray<Item>;
    readonly cost: number;
}

export interface CartActions {
    readonly addItem: (item: Item) => AddItemAction;
    readonly removeItem: (item: Item) => RemoveItemAction;
}

type Props = CartProps & CartAction;

export const Cart = (props: Props): JSX.Element => {
    console.log(props);
    return (
        <div>This is the Cart page.</div>
    )
};