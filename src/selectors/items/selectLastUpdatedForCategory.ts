import * as moment from 'moment';
import * as constants from '../../application/constants';
import { Store } from '../../stores';

export const selectLastUpdatedForCategory = (store: Store, categoryId: string): moment.Moment | undefined => {
    const itemsByCategoryData = store.items.itemsByCategory[categoryId];
    if (!itemsByCategoryData) {
        return;
    }

    if (itemsByCategoryData.type === constants.SUCCESS_ITEMS_BY_CATEGORY) {
        return itemsByCategoryData.lastUpdated;
    };

    return;

}