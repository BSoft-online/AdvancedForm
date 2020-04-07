import { errorMessages, ValidationType } from '../../constants';
import { requiredCases, emailCases } from '../cases';
import { testArray } from './utils';

describe('email validation', () => {
    const params = {
        text: '',
        name: 'email',
        validationType: ValidationType.email,
    };

    test(`should return '${errorMessages.email.invalid}'`, () => {
        testArray({
            testCases: emailCases,
            params,
            result: errorMessages.email.invalid,
        });
    });

    test(`should return '${errorMessages.email.required}'`, () => {
        testArray({
            testCases: requiredCases,
            params,
            result: errorMessages.email.required,
        });
    });

    test('should return empty string', () => {
        testArray({
            testCases: ['jan.kowalski@gmail.com'],
            params,
            result: '',
        });
    });
});
