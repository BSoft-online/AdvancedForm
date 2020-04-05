import { styled } from '@material-ui/styles';
import { Box } from '@material-ui/core';

export const Container = styled(Box)({
    '& > *': {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    '& > span:first-of-type': {
        marginRight: '15px',
    },
});
