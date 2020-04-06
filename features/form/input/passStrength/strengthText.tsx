import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { styles } from './styles';
import { ScoreProps } from './interfaces';
import { infoClasses, scoreMessage, scoreToName } from './constants';

const StrengthTextView: React.FunctionComponent<ScoreProps> = ({
    classes,
    score,
}) => (
    <div className={classes.info}>
        <Typography variant="body1" className={classes[infoClasses[score]]}>
            {scoreMessage[scoreToName[score]]}
        </Typography>
    </div>
);
export const StrengthText = withStyles(styles)(StrengthTextView);
