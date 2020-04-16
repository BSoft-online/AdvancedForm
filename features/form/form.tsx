import React, { useState, useEffect, useRef } from 'react';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import { Container, Fieldset, ButtonsPanel } from './containers';
import { Snackbar } from './snackbar';
import { Input } from './input';
import { handleSubmit, handleSnackbarClose } from './handlers';
import { StringDictionary } from './types';
import { textFields } from './constants';

export const Form: React.FunctionComponent = () => {
    const [values, setValues] = useState<StringDictionary>({});
    const [errors, setErrors] = useState<StringDictionary>({});
    const [loading, setLoading] = useState(false);
    const [passwordScore, setPasswordScore] = useState(0);
    const checkPassword = useRef<Function>();

    useEffect(() => {
        (async (): Promise<void> => {
            const { default: zxcvbn } = await import('zxcvbn');
            checkPassword.current = zxcvbn;
        })();
    }, []);

    const setters = {
        setValues,
        setErrors,
        setLoading,
        setPasswordScore,
    };
    const errorMessage = Object.values(errors).find((e) => e) || '';

    return (
        <Container component="form">
            <Snackbar
                message={
                    values.serviceResponse && !errorMessage
                        ? 'Sended!'
                        : errorMessage
                }
                isError={!!errorMessage}
                onClose={handleSnackbarClose(setters)}
            />
            <Fieldset>
                <Typography
                    variant="h5"
                    color="primary"
                    align="center"
                    gutterBottom
                >
                    Register
                </Typography>
                {textFields.map((field, index) => (
                    <Input
                        key={index}
                        setters={setters}
                        checkPassword={checkPassword.current}
                        passwordScore={passwordScore}
                        value={values[field.name]}
                        {...field}
                    />
                ))}
                <ButtonsPanel>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        onClick={handleSubmit({ setters, values })}
                    >
                        {loading ? (
                            <CircularProgress size={18} className="loader" />
                        ) : null}
                        <Typography>Register</Typography>
                    </Button>
                </ButtonsPanel>
            </Fieldset>
        </Container>
    );
};
