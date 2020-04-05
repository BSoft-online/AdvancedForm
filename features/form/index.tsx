import React, { useState, useEffect, useRef } from 'react';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import { Container, Fieldset, ButtonsPanel } from './containers';
import { Label, ErrorMessage } from './elements';
import { Success } from './success';
import { PlaceholderInput } from 'components/placeholderInput';
import {
    handleEmailChange,
    handleLogout,
    handlePasswordChange,
    handleSubmit,
} from './handlers';
import { PassStrength } from './passStrength';

export const Form: React.FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [serviceError, setServiceError] = useState('');
    const [serviceResponse, setServiceResponse] = useState('');
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
        setEmailError,
        setPassword,
        setPasswordError,
        setServiceError,
        setServiceResponse,
        setLoading,
        setPasswordScore,
    };

    return serviceResponse ? (
        <Success email={serviceResponse} onLogout={handleLogout(setters)} />
    ) : (
        <Container component="form">
            <Fieldset>
                <Typography
                    variant="h5"
                    color="primary"
                    align="center"
                    gutterBottom
                >
                    Log in
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
                <ErrorMessage variant="body2" color="error">
                    {emailError || passwordError || serviceError}
                </ErrorMessage>
                <ButtonsPanel>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!!(emailError || passwordError || loading)}
                        onClick={handleSubmit({ setters, email, password })}
                    >
                        {loading ? (
                            <CircularProgress size={18} className="loader" />
                        ) : null}
                        <Typography>Submit</Typography>
                    </Button>
                </ButtonsPanel>
            </Fieldset>
        </Container>
    );
};
