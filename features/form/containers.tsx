import { styled } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

export const Container = styled(Paper)(({ theme }: { theme: Theme }) => ({
    padding: '30px 30px 50px',
    marginTop: '50px',
    marginBottom: '50px',
    backgroundColor: theme.palette.grey[100],
    minWidth: '300px',
    [theme.breakpoints.up('md')]: {
        width: '400px',
    },
}));

export const Fieldset = styled('fieldset')({
    border: 0,
    margin: '0 auto',
    padding: 0,
});

export const ButtonsPanel = styled('div')(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    '& button': {
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    '& .loader': {
        width: '18px',
        height: '18px',
        color: theme.palette.primary.light,
        position: 'absolute',
        left: '20px',
        top: '9px',
    },
}));
