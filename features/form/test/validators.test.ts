import {
    validateEmail,
    validatePassword,
    emailInvalidError,
    emailRequiredError,
    passwordInvalidError,
    passwordRequiredError,
} from '../validators';

describe('data validation', () => {
    test(`validateEmail should return '${emailInvalidError}'`, () => {
        expect(validateEmail('test')).toBe(emailInvalidError);
        expect(validateEmail('test@')).toBe(emailInvalidError);
        expect(validateEmail('test@test')).toBe(emailInvalidError);
        expect(validateEmail('test@.test')).toBe(emailInvalidError);
        expect(validateEmail('test@.')).toBe(emailInvalidError);
    });

    test(`validateEmail should return '${emailRequiredError}'`, () => {
        expect(validateEmail('')).toBe(emailRequiredError);
        expect(validateEmail()).toBe(emailRequiredError);
    });

    test(`validatePassword should return '${passwordInvalidError}'`, () => {
        expect(validatePassword('a')).toBe(passwordInvalidError);
        expect(validatePassword('ab')).toBe(passwordInvalidError);
        expect(validatePassword('abc')).toBe(passwordInvalidError);
        expect(validatePassword('abcd')).toBe(passwordInvalidError);
    });

    test(`validatePassword should return '${passwordRequiredError}'`, () => {
        expect(validatePassword('')).toBe(passwordRequiredError);
        expect(validatePassword()).toBe(passwordRequiredError);
    });
});
