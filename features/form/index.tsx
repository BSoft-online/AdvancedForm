import React, { useState, useEffect, useRef } from 'react';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import { Container, Fieldset, ButtonsPanel } from './containers';
import { Label } from './elements';
import { Snackbar } from './snackbar';
import { PlaceholderInput } from 'components/placeholderInput';
import {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleSnackbarClose,
    Errors,
} from './handlers';
import { PassStrength } from './passStrength';

export const Form: React.FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [serviceResponse, setServiceResponse] = useState('');
    const [errors, setErrors] = useState<Errors>({});
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
        setEmail,
        setErrors,
        setPassword,
        setServiceResponse,
        setLoading,
        setPasswordScore,
    };
    const errorMessage = Object.values(errors).find((e) => e) || '';

    return (
        <Container component="form">
            <Snackbar
                message={
                    serviceResponse
                        ? `Hello ${serviceResponse}! You registered correctly!`
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
                <Label>
                    <Typography variant="h6">Email</Typography>
                    <PlaceholderInput
                        type="email"
                        name="email"
                        required
                        autoFocus
                        onChange={handleEmailChange(setters)}
                        value={email}
                        fullWidth
                    />
                </Label>
                <Label>
                    <Typography variant="h6">Password</Typography>
                    <PlaceholderInput
                        type="password"
                        name="password"
                        required
                        placeholder="Your password"
                        onChange={handlePasswordChange({
                            setters,
                            checkPassword: checkPassword.current,
                        })}
                        value={password}
                        fullWidth
                    />
                    <PassStrength score={passwordScore} />
                </Label>
                <ButtonsPanel>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        onClick={handleSubmit({ setters, email, password })}
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
