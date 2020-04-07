import { errorMessages, ValidationType } from '../../constants';
import { requiredCases, numberOfTicketsCases } from '../cases';
import { testArray } from './utils';

describe('numberOfTickets validation', () => {
    const params = {
        text: '',
        name: 'numberOfTickets',
        validationType: ValidationType.numeric,
        minValue: 1,
        maxValue: 20,
    };

    test(`should return '${errorMessages.numberOfTickets.invalid}'`, () => {
        testArray({
            testCases: numberOfTicketsCases,
            params,
            result: errorMessages.numberOfTickets.invalid,
        });
    });

    test(`should return '${errorMessages.numberOfTickets.required}'`, () => {
        testArray({
            testCases: requiredCases,
            params,
            result: errorMessages.numberOfTickets.required,
        });
    });

    test('should return empty string', () => {
        testArray({
            testCases: ['10'],
            params,
            result: '',
        });
    });
});
