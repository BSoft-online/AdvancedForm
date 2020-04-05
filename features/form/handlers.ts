import React from 'react';
import { register } from 'services/auth';
import {
    validateEmail,
    validatePassword,
    MIN_PASSWORD_LENGTH,
} from './validators';

export interface Errors {
    [id: string]: string;
}

type Setters = {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setServiceResponse: React.Dispatch<React.SetStateAction<string>>;
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setPasswordScore: React.Dispatch<React.SetStateAction<number>>;
};

export const handleEmailChange = (setters: Setters) => (
    e: React.ChangeEvent<HTMLInputElement>
): void => {
    const text = e.currentTarget.value;
    setters.setEmail(text);
    setters.setErrors((val) => ({
        ...val,
        password: validateEmail(text),
    }));
};

export const handlePasswordChange = ({
    setters,
    checkPassword,
}: {
    setters: Setters;
    checkPassword: Function | undefined;
}) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.currentTarget.value;
    const passwordScore =
        !text || !checkPassword
            ? 0
            : text.length < MIN_PASSWORD_LENGTH
            ? 1
            : checkPassword(text).score + 2;
    setters.setPasswordScore(passwordScore);
    setters.setPassword(text);
    setters.setErrors((val) => ({
        ...val,
        password: validatePassword(text),
    }));
};

export const handleSubmit = ({
    setters,
    email,
    password,
}: {
    setters: Setters;
    email: string;
    password: string;
}) => async (): Promise<void> => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setters.setErrors((val) => ({
        ...val,
        email: emailError,
        password: passwordError,
    }));
    if (emailError || passwordError) return;

    setters.setLoading(true);
    const { result, error } = await register(email);
    setters.setErrors((val) => ({
        ...val,
        service: error ? error : '',
    }));
    result && setters.setServiceResponse(result);
    setters.setLoading(false);
};

export const handleSnackbarClose = (setters: Setters) => (): void => {
    setters.setErrors({});
    setters.setServiceResponse('');
    setters.setLoading(false);
};
