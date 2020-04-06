import React from 'react';
import { styled } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core';

const Placeholder = styled('label')(({ theme }: { theme: Theme }) => ({
    color: theme.palette.grey[300],
    backgroundColor: 'transparent',
    position: 'absolute',
}));

export const PlaceholderInput: React.FunctionComponent<OutlinedInputProps> = ({
    value = '',
    placeholder = '',
    startAdornment = null,
    ...rest
}) => (
    <OutlinedInput
        required
        fullWidth
        value={value}
        {...rest}
        startAdornment={
            startAdornment || !value ? (
                <>
                    {startAdornment}
                    {!value ? <Placeholder>{placeholder}</Placeholder> : null}
                </>
            ) : null
        }
    />
);
