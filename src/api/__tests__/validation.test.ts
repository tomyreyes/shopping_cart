// tslint:disable: no-expression-statement typedef readonly-array
import { validateIncomingData } from '../validation';
import { itemsArray } from '../schema';
import { aNumber, aString } from '../../application/helpers/randomTestValues';

describe('items response validation', () => {
    describe('with valid data' , () => {
        it('passes schema validation', () => {
            const validData = [{
                listing_id: aNumber(),
                title: aString(),
                description: aString(),
                price: aString(),
                views: aNumber(),
                Images: [
                    { listing_image_id: aNumber() },
                ],
            }];
            const validator = validateIncomingData(itemsArray, validData);
            expect(validator.isValid).toBe(true);
        });
    });

    describe('with invalid data', () => {
        it('fails schema validation', () => {
            const invalidData = [{
                listing_id: aNumber(),
                // title: aString(),
                // description: aString(),
                // price: aString(),
                // views: aNumber(),
                // Images: [
                //     { listing_image_id: aNumber() },
                // ],
            }];
            const validator = validateIncomingData(itemsArray, invalidData);
            expect(validator.isValid).toBe(false);
        });
    });
});