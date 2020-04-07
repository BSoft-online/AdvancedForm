import {
    MIN_PASSWORD_LENGTH,
    errorMessages,
    ValidationType,
} from './constants';
import {
    FunctionDictionary,
    ValidateFunction,
    MainValidateFunction,
} from './types';

const checkEmail = (content = ''): boolean =>
    /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*\.+([\\.-]?\w+)+$/.test(content);

const validateEmail = ({ name, text }: ValidateFunction): string => {
    if (!text.trim()) return errorMessages[name].required;
    return checkEmail(text) ? '' : errorMessages[name].invalid;
};

const checkPassword = (content = ''): boolean =>
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(content);

const validatePassword = ({ name, text }: ValidateFunction): string => {
    if (!text.trim()) return errorMessages[name].required;
    return text.length < MIN_PASSWORD_LENGTH || !checkPassword(text)
        ? errorMessages[name].invalid
        : '';
};

const checkNumeric = (content = ''): boolean => /^[0-9]+$/.test(content);

const validateNumeric = ({ name, text }: ValidateFunction): string => {
    if (!text.trim()) return errorMessages[name].required;
    return checkNumeric(text) ? '' : errorMessages[name].invalid;
};

const checkLiteral = (content = ''): boolean => /[0-9]/.test(content);

const validateLiteral = ({ name, text }: ValidateFunction): string => {
    if (!text.trim()) return errorMessages[name].required;
    return checkLiteral(text) ? errorMessages[name].invalid : '';
};

const validateLimit = ({ name, limit, text }: ValidateFunction): string => {
    if (!text.trim()) return errorMessages[name].required;
    return limit && text.length > limit ? errorMessages[name].invalid : '';
};

const validateValueInterval = ({
    name,
    minValue,
    maxValue,
    text,
}: ValidateFunction): string => {
    const trimmedText = text.trim();
    if (!trimmedText) return errorMessages[name].required;

    const number = parseInt(trimmedText);
    if (
        number === NaN ||
        !checkNumeric(trimmedText) ||
        (maxValue !== undefined && number > maxValue) ||
        (minValue !== undefined && number < minValue)
    ) {
        return errorMessages[name].invalid;
    }
    return '';
};

const validators: FunctionDictionary = {
    email: validateEmail,
    password: validatePassword,
    numeric: validateNumeric,
    literal: validateLiteral,
    limit: validateLimit,
    valueInterval: validateValueInterval,
};

export const validate = ({
    text,
    name,
    validationType,
    limit,
    maxValue,
    minValue,
}: MainValidateFunction): string => {
    let error = '';
    const ensuredText = text || '';
    if (validationType) {
        error = validators[validationType]({ name, text: ensuredText });
    }
    if (!error && limit) {
        error = validators[ValidationType.limit]({
            name,
            text: ensuredText,
            limit,
        });
    }
    if (!error && minValue !== undefined && maxValue !== undefined) {
        error = validators[ValidationType.valueInterval]({
            name,
            text: ensuredText,
            minValue,
            maxValue,
        });
    }
    return error;
};
