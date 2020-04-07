import { errorMessages, ValidationType } from '../../constants';
import { requiredCases, vidNumberCases } from '../cases';
import { testArray } from './utils';

describe('vidNumber validation', () => {
    const params = {
        text: '',
        name: 'vidNumber',
        validationType: ValidationType.numeric,
        limit: 5,
    };

    test(`should return '${errorMessages.vidNumber.invalid}'`, () => {
        testArray({
            testCases: vidNumberCases,
            params,
            result: errorMessages.vidNumber.invalid,
        });
    });

    test(`should return '${errorMessages.vidNumber.required}'`, () => {
        testArray({
            testCases: requiredCases,
            params,
            result: errorMessages.vidNumber.required,
        });
    });

    test('should return empty string', () => {
        testArray({
            testCases: ['90120'],
            params,
            result: '',
        });
    });
});
