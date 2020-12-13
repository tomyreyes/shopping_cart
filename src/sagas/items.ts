// tslint:disable: no-expression-statement
import * as constants from '../application/constants';
import { ForkEffect, takeLatest, call } from 'redux-saga/effects';
import { RequestItemsByCategoryAction } from '../stores/items/actions';
import { requestCategoryListings } from '../api';
import { AxiosResponse } from 'axios';
import { validateIncomingData } from '../api/validation';
import { itemsArray } from '../api/schema';

export function* watchRequestItemsByCategory(): IterableIterator<ForkEffect> {
    yield takeLatest(constants.REQUEST_ITEMS_BY_CATEGORY, updateItemsByCategory);
}

export function* updateItemsByCategory(action: RequestItemsByCategoryAction): any {
    const category = action.payload;
    try {
        const apiResponse: AxiosResponse = yield call(requestCategoryListings, category, 'qm099t7yynq4mrufiqzt0maz');
        const validatedResponse = validateIncomingData(itemsArray, apiResponse.data);
        if (!validatedResponse.isValid) {
            console.log('error in validation');
        }
        console.log(apiResponse.data);
    } catch (error) {
        console.log(error);
    }
}