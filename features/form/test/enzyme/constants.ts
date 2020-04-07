import {
    nameCases,
    textarea1Cases,
    passwordCases,
    emailCases,
    numberOfTicketsCases,
    textarea2Cases,
    vidNumberCases,
} from '../cases';

const caseMapping = [
    { name: 'firstName', markup: 'input', tests: nameCases, isNumber: 'false' },
    { name: 'lastName', markup: 'input', tests: nameCases, isNumber: 'false' },
    {
        name: 'textarea1',
        markup: 'textarea',
        tests: textarea1Cases,
        isNumber: 'false',
    },
    {
        name: 'textarea2',
        markup: 'textarea',
        tests: textarea2Cases,
        isNumber: 'false',
    },
    { name: 'email', markup: 'input', tests: emailCases, isNumber: 'false' },
    {
        name: 'password',
        markup: 'input',
        tests: passwordCases,
        isNumber: 'false',
    },
    {
        name: 'vidNumber',
        markup: 'input',
        tests: vidNumberCases,
        isNumber: 'true',
    },
    {
        name: 'numberOfTickets',
        markup: 'input',
        tests: numberOfTicketsCases,
        isNumber: 'true',
    },
];

export const cases = caseMapping.reduce(
    (
        acc: Array<string[]>,
        {
            name,
            markup,
            tests,
            isNumber,
        }: {
            name: string;
            markup: string;
            tests: string[];
            isNumber: string;
        }
    ): Array<string[]> => [
        ...acc,
        ...tests.map((test: string) => [name, markup, test, isNumber]),
    ],
    []
);

export const errorLabelSelector = '.MuiSnackbarContent-message p';

export const buttonSelector = 'button.MuiButton-contained';
