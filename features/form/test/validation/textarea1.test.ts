import { errorMessages } from '../../constants';
import { requiredCases, textarea1Cases } from '../cases';
import { testArray } from './utils';

describe('textarea1 validation', () => {
    const params = {
        text: '',
        name: 'textarea1',
        limit: 10,
    };

    test(`should return '${errorMessages.textarea1.invalid}'`, () => {
        testArray({
            testCases: textarea1Cases,
            params,
            result: errorMessages.textarea1.invalid,
        });
    });

    test(`should return '${errorMessages.textarea1.required}'`, () => {
        testArray({
            testCases: requiredCases,
            params,
            result: errorMessages.textarea1.required,
        });
    });

    test('should return empty string', () => {
        testArray({
            testCases: ['Text'],
            params,
            result: '',
        });
    });
});
