import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { cssBaseLineStyles } from './cssBaseLine';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {
        passStrength: {
            [id: string]: string;
        };
    }

    interface Palette {
        passStrength: {
            [id: string]: string;
        };
    }
}

export const theme = createMuiTheme({
    palette: {
        passStrength: {
            none: '#d8d8d8',
            short: '#f03434',
            bad: '#f03434',
            weak: '#ffb600',
            enough: '#ffb600',
            good: '#13a4e6',
            strong: '#48bd58',
        },
    },
    overrides: {
        MuiCssBaseline: cssBaseLineStyles(grey[900]),
        MuiSnackbarContent: {
            message: {
                flex: 1,
            },
        },
    },
});
