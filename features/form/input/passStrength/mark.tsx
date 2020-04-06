import React from 'react';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { styles } from './styles';
import { StateProps } from './interfaces';

const MarkView: React.FunctionComponent<StateProps> = ({ classes, state }) => (
    <div className={clsx(classes.mark, classes[state])} />
);

export const Mark = withStyles(styles)(MarkView);
