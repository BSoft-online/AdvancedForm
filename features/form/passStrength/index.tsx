import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './styles';
import { ScoreProps } from './interfaces';
import { markClasses } from './constants';
import { Mark } from './mark';
import { StrengthText } from './strengthText';

const getMarkClass = (pos: number, score: number): string =>
    pos === 0 || score > pos + 1 ? markClasses[score] : markClasses[0];

const PassStrengthView: React.FunctionComponent<ScoreProps> = ({
    classes,
    score,
}) => (
    <>
        <div className={classes.meter}>
            {[0, 1, 2, 3, 4].map((i) => (
                <Mark key={`mark-${i}`} state={getMarkClass(i, score)} />
            ))}
        </div>
        <StrengthText score={score} />
    </>
);

export const PassStrength = withStyles(styles)(PassStrengthView);
