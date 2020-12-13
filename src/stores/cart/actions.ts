import { ADD_ITEM, REMOVE_ITEM } from '../../application/constants';

export type CartAction = AddItemAction | RemoveItemAction;

export interface AddItemAction {
    readonly type: typeof ADD_ITEM;
    // TODO replace this with declared time of product item
    // tslint:disable-next-line: no-any
    readonly payload: any;
}

export interface RemoveItemAction {
    readonly type: typeof REMOVE_ITEM;
    readonly payload: string;
}

// tslint:disable-next-line: no-any
export const addItem = (item: any): AddItemAction => {
    return {
        type: ADD_ITEM,
        payload: item,
    };
};

export const removeItem = (itemId: string): RemoveItemAction => {
    return {
        type: REMOVE_ITEM,
        payload: itemId,
    };
};
