import { register } from 'services/auth';
import { validate } from './validation';
import { textFields } from './constants';
import { StringDictionary, Setters, SubmitArguments } from './types';

const setLocalStorageData = (values: StringDictionary): void[] =>
    Object.entries(values).map(([key, value]) =>
        localStorage.setItem(key, value)
    );

const validateForm = ({ values, setters }: SubmitArguments): boolean => {
    const errors = textFields.reduce((acc, field) => {
        const error = validate({
            text: values[field.name] || '',
            name: field.name,
            limit: field.limit,
            maxValue: field.maxValue,
            minValue: field.minValue,
            validationType: field.validationType,
        });
        return {
            ...acc,
            [field.name]: error,
        };
    }, {});
    setters.setErrors((val) => ({
        ...val,
        ...errors,
    }));
    return !!Object.values(errors).find((e) => e);
};

export const handleSubmit = ({
    setters,
    values,
}: SubmitArguments) => async (): Promise<void> => {
    if (validateForm({ values, setters })) return;

    setters.setLoading(true);
    try {
        const { result, error } = await register(values.email);
        setters.setErrors((val) => ({
            ...val,
            serviceResponse: error ? error : '',
        }));
        if (result) {
            setters.setValues((val) => ({ ...val, serviceResponse: result }));
            setLocalStorageData(values);
        }
    } catch (e) {
        setters.setErrors((val) => ({
            ...val,
            serviceResponse: e.message,
        }));
    } finally {
        setters.setLoading(false);
    }
};

export const handleSnackbarClose = (setters: Setters) => (): void => {
    setters.setErrors({});
    setters.setValues((val) => ({ ...val, serviceResponse: '' }));
    setters.setLoading(false);
};
