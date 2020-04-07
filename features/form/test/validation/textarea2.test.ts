import { errorMessages } from '../../constants';
import { requiredCases, textarea2Cases } from '../cases';
import { testArray } from './utils';

describe('textarea2 validation', () => {
    const params = {
        text: '',
        name: 'textarea2',
        limit: 20,
    };

    test(`should return '${errorMessages.textarea2.invalid}'`, () => {
        testArray({
            testCases: textarea2Cases,
            params,
            result: errorMessages.textarea2.invalid,
        });
    });

    test(`should return '${errorMessages.textarea2.required}'`, () => {
        testArray({
            testCases: requiredCases,
            params,
            result: errorMessages.textarea2.required,
        });
    });

    test('should return empty string', () => {
        testArray({
            testCases: ['Description'],
            params,
            result: '',
        });
    });
});
