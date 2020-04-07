import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'config/theme';
import { Form } from '../../index';
import { errorMessages } from '../../constants';
import { errorLabelSelector, cases } from './constants';

const numericRegex = /^[0-9]+(\.[0-9]+)?$/;

describe('check text fields', () => {
    let mount = createMount();

    beforeEach(() => {
        mount = createMount();
    });

    afterEach(() => {
        mount.cleanUp();
    });

    test.each(cases)('%s %s %s %s', (...params) => {
        const name = params[0];
        const markup = params[1];
        const text = params[2];
        const isNumber = params[3] === 'true' && numericRegex.test(text);
        const shouldBeInvalid = params[3] === 'false' || isNumber;
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <Form />
            </ThemeProvider>
        );
        const inputSelector = `${markup}[name="${name}"]`;
        const input = wrapper.find(inputSelector).first();

        input.getDOMNode<HTMLInputElement>().value = text;
        wrapper.update();
        input.simulate('change');

        expect(wrapper.find(errorLabelSelector).first().text()).toEqual(
            shouldBeInvalid
                ? errorMessages[name].invalid
                : errorMessages[name].required
        );
    });
});
