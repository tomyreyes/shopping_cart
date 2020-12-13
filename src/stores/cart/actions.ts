import { ADD_ITEM } from '../../application/constants';

export type CartAction = AddItemAction;

export interface AddItemAction {
    readonly type: typeof ADD_ITEM;
    // TODO replace this with declared time of product item
    // tslint:disable-next-line: no-any
    readonly payload: any;
}

// tslint:disable-next-line: no-any
export const addItem = (item: any): AddItemAction => {
    return {
        type: ADD_ITEM,
        payload: item,
    };
};
