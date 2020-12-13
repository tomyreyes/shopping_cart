// tslint:disable: no-expression-statement typedef readonly-array
import { validateIncomingData } from '../validation';
import { itemsArray } from '../schema';

describe('items response validation', () => {
    describe('with valid data' , () => {
        it('passes schema validation', () => {
            const validData = [{
                listing_id: 1,
                title: 'First item',
                description: 'Item Description',
                price: '10.00',
                views: 1,
                Images: [
                    { listing_image_id: 1 },
                ],
            }];
            const validator = validateIncomingData(itemsArray, validData);
            expect(validator.isValid).toBe(true);
        });
    });

    describe('with invalid data', () => {
        it('fails schema validation', () => {
            const invalidData = [{
                listing_id: 1,
                // title: 'First item',
                // description: 'Item Description',
                // price: '10.00',
                // views: 1,
                // Images: [
                //     { listing_image_id: 1 },
                // ],
            }];
            const validator = validateIncomingData(itemsArray, invalidData);
            expect(validator.isValid).toBe(false);
        });
    });
});