import { errorMessages, ValidationType } from '../../constants';
import { requiredCases, nameCases } from '../cases';
import { testArray } from './utils';

describe('last name validation', () => {
    const params = {
        text: '',
        name: 'lastName',
        validationType: ValidationType.literal,
    };

    test(`should return '${errorMessages.lastName.invalid}'`, () => {
        testArray({
            testCases: nameCases,
            params,
            result: errorMessages.lastName.invalid,
        });
    });

    test(`should return '${errorMessages.lastName.required}'`, () => {
        testArray({
            testCases: requiredCases,
            params,
            result: errorMessages.lastName.required,
        });
    });

    test('should return empty string', () => {
        testArray({
            testCases: ['Kowalski'],
            params,
            result: '',
        });
    });
});
