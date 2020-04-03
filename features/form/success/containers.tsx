import { styled } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export const TextContainer = styled('div')({
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 'calc(100% - 150px)',
});

export const MessageContainer = styled('div')(
    ({ theme }: { theme: Theme }) => ({
        '& svg': {
            display: 'inline-block',
            verticalAlign: 'middle',
            width: '150px',
            height: '150px',
        },
        '& p': {
            marginBottom: '20px',
        },
        color: theme.palette.success.main,
    })
);
