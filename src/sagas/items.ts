// tslint:disable: no-expression-statement
import * as constants from '../application/constants';
import * as R from 'ramda';
import { ForkEffect, takeLatest, call, put } from 'redux-saga/effects';
import { RequestItemsByCategoryAction, requestItemsByCategoryError, requestItemsByCategorySuccess } from '../stores/items/actions';
import { requestCategoryListings } from '../api';
import { AxiosResponse } from 'axios';
import { validateIncomingData } from '../api/validation';
import { itemsArray } from '../api/schema';
import { Item } from '../stores/items/types';

const API_KEY = process.env.REACT_APP_API_KEY || '';

export function* watchRequestItemsByCategory(): IterableIterator<ForkEffect> {
    yield takeLatest(constants.REQUEST_ITEMS_BY_CATEGORY, updateItemsByCategory);
}

export function* updateItemsByCategory(action: RequestItemsByCategoryAction): UpdateResult {
    const category = action.payload;
    try {
        const apiResponse: AxiosResponse = yield call(requestCategoryListings, category, API_KEY);
        const validatedResponse = validateIncomingData(itemsArray, apiResponse.data.results);
        if (!validatedResponse.isValid) {
            console.log(validatedResponse.errors);
            const errorMessage = 'The data received fails validation. Please try again later.';
            return yield put(requestItemsByCategoryError(category, errorMessage));
        }
        const items = parseResponseToItemsForStore(apiResponse.data.results);
        return yield put(requestItemsByCategorySuccess(category, items));
    } catch (error) {
        return yield put(requestItemsByCategoryError(category, error));
    }
}

// tslint:disable-next-line: no-any
type UpdateResult = any;

interface ValidatedResponseItemJSON {
    readonly listing_id: number;
    readonly title: string;
    readonly description: string;
    readonly price: string;
    readonly views: number;
    readonly Images: ValidatedResponseImageJSON;
}

interface ValidatedResponseImageJSON {
    readonly url_75x75: string;
    readonly url_170x135: string;
    readonly url_570xN: string;
    readonly url_fullxfull: string;
}

const parseResponseToItemsForStore = (results: ReadonlyArray<ValidatedResponseItemJSON>): ReadonlyArray<Item> => (
    R.map(parseIndexValueToItem, results)
);

const parseIndexValueToItem = (result: ValidatedResponseItemJSON): Item => {
    return {
        id: result.listing_id,
        title: result.title,
        description: result.description,
        price: parseFloat(result.price),
        views: result.views,
        imageProperties: {
            avatarUrl: result.Images.url_75x75,
            smallUrl: result.Images.url_170x135,
            mediumUrl: result.Images.url_570xN,
            fullUrl: result.Images.url_fullxfull,
        },
    };
};