import { ADD_ITEM, REMOVE_ITEM } from '../../application/constants';
import { LoadCachedDataErrorAction, LoadCachedDataSuccessAction } from '../dataCache';

export type CartAction = AddItemAction |
RemoveItemAction |
LoadCachedDataErrorAction |
LoadCachedDataSuccessAction;

export interface AddItemAction {
    readonly type: typeof ADD_ITEM;
    // TODO replace this with declared time of product item
    // tslint:disable-next-line: no-any
    readonly payload: any;
}

export interface RemoveItemAction {
    readonly type: typeof REMOVE_ITEM;
    readonly payload: number;
}

// tslint:disable-next-line: no-any
export const addItem = (cartItem: any): AddItemAction => {
    return {
        type: ADD_ITEM,
        payload: cartItem,
    };
};

export const removeItem = (itemId: number): RemoveItemAction => {
    return {
        type: REMOVE_ITEM,
        payload: itemId,
    };
};
