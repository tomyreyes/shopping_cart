import { ADD_ITEM, REMOVE_ITEM } from '../../application/constants';
import { LoadCachedDataErrorAction, LoadCachedDataSuccessAction } from '../dataCache';
import { Item } from '../items/types';

export type CartAction = AddItemAction |
RemoveItemAction |
LoadCachedDataErrorAction |
LoadCachedDataSuccessAction;

export interface AddItemAction {
    readonly type: typeof ADD_ITEM;
    readonly payload: Item;
}
export interface RemoveItemAction {
    readonly type: typeof REMOVE_ITEM;
    readonly payload: Item;
}

export const addItem = (cartItem: Item): AddItemAction => {
    return {
        type: ADD_ITEM,
        payload: cartItem,
    };
};

export const removeItem = (cartItem: Item): RemoveItemAction => {
    return {
        type: REMOVE_ITEM,
        payload: cartItem,
    };
};
