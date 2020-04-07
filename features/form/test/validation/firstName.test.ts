import { errorMessages, ValidationType } from '../../constants';
import { requiredCases, nameCases } from '../cases';
import { testArray } from './utils';

describe('first name validation', () => {
    const params = {
        text: '',
        name: 'firstName',
        validationType: ValidationType.literal,
    };

    test(`should return '${errorMessages.firstName.invalid}'`, () => {
        testArray({
            testCases: nameCases,
            params,
            result: errorMessages.firstName.invalid,
        });
    });

    test(`should return '${errorMessages.firstName.required}'`, () => {
        testArray({
            testCases: requiredCases,
            params,
            result: errorMessages.firstName.required,
        });
    });

    test('should return empty string', () => {
        testArray({
            testCases: ['Jan'],
            params,
            result: '',
        });
    });
});
