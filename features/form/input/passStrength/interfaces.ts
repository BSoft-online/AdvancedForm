import { WithStyles } from '@material-ui/styles';
import { styles } from './styles';

export interface ScoreProps extends WithStyles<typeof styles> {
    score: number;
}

export interface StateProps extends WithStyles<typeof styles> {
    state: string;
}
