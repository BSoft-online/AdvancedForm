import { StyleRules } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { scoreToName, markClasses, infoClasses } from './constants';

const createMarkStyles = (theme: Theme): object =>
    scoreToName.reduce(
        (res, n: string, i) => ({
            ...res,
            [markClasses[i]]: { background: theme.palette.passStrength[n] },
        }),
        {}
    );

const createInfoStyles = (theme: Theme): object =>
    scoreToName.reduce(
        (res, n, i) => ({
            ...res,
            [infoClasses[i]]: { color: theme.palette.passStrength[n] },
        }),
        {}
    );

export const styles = (theme: Theme): StyleRules => ({
    meter: {
        justifyContent: 'space-between',
        display: 'flex',
        margin: '1.5em 0 1em 0',
    },
    mark: {
        height: '2px',
        margin: '0 2px',
        flexGrow: 1,
    },
    info: {
        minHeight: '1.5em',
        fontWeight: 'normal',
        fontStyle: 'italic',
        textTransform: 'none',
    },
    ...createMarkStyles(theme),
    ...createInfoStyles(theme),
});
