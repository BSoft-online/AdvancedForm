import { Setters } from '../types';
import { validate } from '../validators';
import { ValidationType, MIN_PASSWORD_LENGTH } from '../constants';

const handlePasswordStrength = ({
    checkPassword,
    text,
    setters,
}: {
    checkPassword?: Function | undefined;
    text: string;
    setters: Setters;
}): void => {
    const passwordScore =
        !text || !checkPassword
            ? 0
            : text.length < MIN_PASSWORD_LENGTH
            ? 1
            : checkPassword(text).score + 2;
    setters.setPasswordScore(passwordScore);
};

export const handleChange = ({
    setters,
    name,
    validationType,
    checkPassword,
    ...validationProps
}: {
    setters: Setters;
    name: string;
    validationType?: string;
    checkPassword?: Function | undefined;
    limit?: number;
    maxValue?: number;
    minValue?: number;
}) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.currentTarget.value;

    setters.setValues((val) => ({ ...val, [name]: text }));
    validationType === ValidationType.password &&
        handlePasswordStrength({ setters, text, checkPassword });
    setters.setErrors((val) => ({
        ...val,
        [name]: validate({ name, text, validationType, ...validationProps }),
    }));
};
