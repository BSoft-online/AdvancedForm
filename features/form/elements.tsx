import { styled } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

export const Label = styled('label')({
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 2,
    display: 'block',
    marginBottom: '1em',
});

export const ErrorMessage = styled(Typography)({
    minHeight: '20px',
    marginBottom: '10px',
});
