import { styled } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const Label = styled('label')(({ theme }: { theme: Theme }) => ({
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 2,
    display: 'block',
    marginBottom: '1em',
    verticalAlign: 'top',
    [theme.breakpoints.up('md')]: {
        display: 'inline-block',
        width: '50%',
        '&:nth-of-type(2n)': {
            paddingLeft: '10px',
        },
        '&:nth-of-type(2n + 1)': {
            paddingRight: '10px',
        },
    },
}));
