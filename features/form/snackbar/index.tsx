import React from 'react';
import {
    Snackbar as BaseSnackbar,
    IconButton,
    Icon,
    Typography,
} from '@material-ui/core';
import { Close, CheckCircleOutline, ErrorOutline } from '@material-ui/icons';
import { Container } from './containers';

type Props = {
    onClose: Function;
    message: string;
    isError?: boolean;
};

export const Snackbar: React.FunctionComponent<Props> = ({
    onClose,
    message,
    isError = false,
}) => (
    <BaseSnackbar
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={!!message}
        autoHideDuration={5000}
        onClose={(): void => onClose()}
        ClickAwayListenerProps={{
            mouseEvent: false,
            touchEvent: false,
        }}
        message={
            <Container color={isError ? 'error.main' : 'success.main'}>
                <Icon color="inherit">
                    {isError ? <ErrorOutline /> : <CheckCircleOutline />}
                </Icon>
                <Typography>{message}</Typography>
            </Container>
        }
        action={
            <IconButton
                size="small"
                color="inherit"
                onClick={(): void => onClose()}
            >
                <Close fontSize="small" />
            </IconButton>
        }
    />
);
