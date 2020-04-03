import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';
import { MessageContainer, TextContainer } from './containers';

type Props = {
    email: string;
    onLogout: () => void;
};

export const Success: React.FunctionComponent<Props> = ({
    email,
    onLogout,
}) => (
    <MessageContainer className="success">
        <CheckCircleOutline />
        <TextContainer>
            <Typography variant="body1">
                Hello {email}! You are logged in!
            </Typography>
            <Button color="primary" variant="contained" onClick={onLogout}>
                Logout
            </Button>
        </TextContainer>
    </MessageContainer>
);
