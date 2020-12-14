import moment from 'moment';
import { LastUpdated } from '../../../stores/items/types';

export const determineValidCategoryId = (categoryId: string): string => {
    switch (categoryId) {
        case 'dune':
            return 'dune';
        case 'harrypotter':
            return 'Harry Potter';
        case 'starwars':
            return 'Star Wars';
        default:
            return 'no-match';
    }
};

export const shouldRequestNewData = (lastUpdated: LastUpdated, categoryId: string): boolean => {
    const currentDate = moment();
    const minuteThreshhold = 15;
    if (!lastUpdated || categoryId === 'no-match') {
        return true;
    }

    if (!lastUpdateIsMomentObject(lastUpdated)) {
        const lastUpdatedMomentObject = moment(lastUpdated);
        return lastUpdatedMomentObject.diff(currentDate, 'minutes') >= minuteThreshhold;
    }

    return lastUpdated.diff(currentDate, 'minutes') >= minuteThreshhold;
};

export const lastUpdateIsMomentObject = (lastUpdated: LastUpdated): boolean => (
    moment.isMoment(lastUpdated)
);