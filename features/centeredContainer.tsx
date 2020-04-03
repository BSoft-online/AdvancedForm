import React, { FunctionComponent } from 'react';
import { styled } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

type Props = {
    children?: React.ReactNode;
};

const Container = styled(Grid)({
    height: '100vh',
});

export const CenteredContainer: FunctionComponent<Props> = ({
    children,
}): JSX.Element => (
    <Container container justify="center" alignItems="center">
        {children}
    </Container>
);
