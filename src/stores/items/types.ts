import * as moment from 'moment';
export interface ItemsByCategory {
    readonly [categoryId: string]: ItemsList;
}

export type ItemsList = InitialEmptyItemsList |
LoadingItemsList |
SuccessItemsList |
ErrorItemsList;

export interface InitialEmptyItemsList {
    readonly type: 'INITIAL_EMPTY_ITEMS_BY_CATEGORY';
    readonly items: ReadonlyArray<Item>;
}

export interface LoadingItemsList {
    readonly type: 'LOADING_ITEMS_BY_CATEGORY';
}

export interface SuccessItemsList {
    readonly type: 'SUCCESS_ITEMS_BY_CATEGORY';
    readonly items: ReadonlyArray<Item>;
    readonly lastUpdated: moment.Moment;
}

export interface ErrorItemsList {
    readonly type: 'ERROR_ITEMS_BY_CATEGORY';
    readonly errorMessage: string;
}

export interface Item {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly views: number;
    readonly imageProperties: ImageProperties;
}

export interface ImageProperties {
    readonly avatarUrl: string;
    readonly smallUrl: string;
    readonly mediumUrl: string;
    readonly fullUrl: string;
}