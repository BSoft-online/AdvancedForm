import { ErrorMessages } from './types';

export enum ValidationType {
    literal = 'literal',
    email = 'email',
    password = 'password',
    numeric = 'numeric',
    limit = 'limit',
    valueInterval = 'valueInterval',
}

export const MIN_PASSWORD_LENGTH = 8;

export const errorMessages: ErrorMessages = {
    firstName: {
        invalid: 'First name cannot contain digits',
        required: 'First name is required',
    },
    lastName: {
        invalid: 'Last name cannot contain digits',
        required: 'Last name is required',
    },
    textarea1: {
        invalid: 'Textarea 1 cannot contain more than 10 characters',
        required: 'Textarea 1 is required',
    },
    textarea2: {
        invalid: 'Textarea 2 cannot contain more than 20 characters',
        required: 'Textarea 2 is required',
    },
    email: {
        invalid: 'Email address is not valid',
        required: 'Email address is required',
    },
    password: {
        invalid:
            'Password should consist of min 8 characters including one letter, one digit and one special character',
        required: 'Password is required',
    },
    vidNumber: {
        invalid:
            'VID number should contain digits only and maximally 5 characters',
        required: 'VID number is required',
    },
    numberOfTickets: {
        invalid:
            'Number of tickets should contain digits only and it should be a number between 1 and 20',
        required: 'Number of tickets is required',
    },
};

export const textFields = [
    {
        name: 'firstName',
        label: 'First name',
        placeholder: 'Your first name',
        validationType: ValidationType.literal,
        autoFocus: true,
    },
    {
        name: 'lastName',
        label: 'Last name',
        placeholder: 'Your last name',
        validationType: ValidationType.literal,
    },
    {
        name: 'textarea1',
        label: 'Textarea 1',
        placeholder: 'Textarea 1',
        limit: 10,
        multiline: true,
    },
    {
        name: 'textarea2',
        label: 'Textarea 2',
        placeholder: 'Textarea 2',
        limit: 20,
        multiline: true,
    },
    {
        type: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'Your email address',
        validationType: ValidationType.email,
    },
    {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'Your password',
        validationType: ValidationType.password,
    },
    {
        type: 'number',
        name: 'vidNumber',
        label: 'VID number',
        placeholder: 'Your VID number',
        validationType: ValidationType.numeric,
        limit: 5,
    },
    {
        type: 'number',
        name: 'numberOfTickets',
        label: 'Number of tickets',
        placeholder: 'Number of tickets',
        validationType: ValidationType.numeric,
        minValue: 1,
        maxValue: 20,
    },
];
