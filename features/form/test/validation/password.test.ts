import { errorMessages, ValidationType } from '../../constants';
import { requiredCases, passwordCases } from '../cases';
import { testArray } from './utils';

describe('password validation', () => {
    const params = {
        text: '',
        name: 'password',
        validationType: ValidationType.password,
    };

    test(`should return '${errorMessages.password.invalid}'`, () => {
        testArray({
            testCases: passwordCases,
            params,
            result: errorMessages.password.invalid,
        });
    });

    test(`should return '${errorMessages.password.required}'`, () => {
        testArray({
            testCases: requiredCases,
            params,
            result: errorMessages.password.required,
        });
    });

    test('should return empty string', () => {
        testArray({
            testCases: ['Password@1'],
            params,
            result: '',
        });
    });
});
