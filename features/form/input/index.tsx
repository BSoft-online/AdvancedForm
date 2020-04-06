import React from 'react';
import { OutlinedInputProps, Typography } from '@material-ui/core';
import { PlaceholderInput } from 'components/placeholderInput';
import { Setters } from '../types';
import { ValidationType } from '../constants';
import { handleChange } from './handler';
import { Label } from './label';
import { PassStrength } from './passStrength';

interface Props extends OutlinedInputProps {
    setters: Setters;
    name: string;
    label: string;
    validationType?: ValidationType;
    checkPassword?: Function;
    limit?: number;
    maxValue?: number;
    minValue?: number;
    passwordScore?: number;
}

export const Input: React.FunctionComponent<Props> = ({
    setters,
    name,
    label,
    validationType,
    checkPassword,
    limit,
    maxValue,
    minValue,
    passwordScore,
    ...rest
}) => (
    <Label>
        <Typography variant="h6">{label}</Typography>
        <PlaceholderInput
            onChange={handleChange({
                setters,
                name,
                validationType,
                checkPassword,
                limit,
                maxValue,
                minValue,
            })}
            name={name}
            {...rest}
        />
        {validationType === ValidationType.password ? (
            <PassStrength score={passwordScore || 0} />
        ) : null}
    </Label>
);
