// tslint:disable: no-expression-statement typedef
import { aNumber, aString } from '../../application/helpers/randomTestValues';
import * as constants from '../../application/constants';
import { buildDefaultStore, reducer } from '../items';
import { RequestItemsByCategoryAction, RequestItemsByCategoryErrorAction, RequestItemsByCategorySuccessAction } from '../items/actions';
import { Item } from '../items/types';

describe('the items reducer', () => {
    describe('when sending a request for items by categoryId', () => {
        it ('creates a loading items by categoryId object', () => {
            const oldStore = buildDefaultStore();
            const categoryId = aString();
            const action: RequestItemsByCategoryAction = {
                type: constants.REQUEST_ITEMS_BY_CATEGORY,
                payload: categoryId,
            };
            const newStore = reducer(oldStore, action);
            expect(newStore.itemsByCategory[categoryId].type).toBe(constants.LOADING_ITEMS_BY_CATEGORY);
        });
    });

    describe('when a successful items by categoryId is received', () => {
        it('creates a success items by categoryId object', () => {
            const oldStore = buildDefaultStore();
            const categoryId = aString();
            const item: Item = {
                id: aNumber(),
                title: aString(),
                description: aString(),
                price: aNumber(),
                views: aNumber(),
                imageProperties: {
                    avatarUrl: aString(),
                    smallUrl: aString(),
                    mediumUrl: aString(),
                    fullUrl: aString(),
                },
            };
            const action: RequestItemsByCategorySuccessAction = {
                type: constants.REQUEST_ITEMS_BY_CATEGORY_SUCCESS,
                payload: {
                    categoryId,
                    items: [item],
                },
            };
            const newStore = reducer(oldStore, action);
            expect(newStore.itemsByCategory[categoryId].type).toBe(constants.SUCCESS_ITEMS_BY_CATEGORY);
        });
    });

    describe('when an error response is received', () => {
        it('creates an error items by categoryId object', () => {
            const oldStore = buildDefaultStore();
            const categoryId = aString();
            const errorMessage = 'An error has been received.';
            const action: RequestItemsByCategoryErrorAction = {
                type: constants.REQUEST_ITEMS_BY_CATEGORY_ERROR,
                payload: {
                    categoryId,
                    errorMessage,
                },
            };
            const newStore = reducer(oldStore, action);
            expect(newStore.itemsByCategory[categoryId].type).toBe(constants.ERROR_ITEMS_BY_CATEGORY);
        });
    });
});