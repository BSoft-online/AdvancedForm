import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'config/theme';
import { Form } from '../index';
import {
    emailInvalidError,
    emailRequiredError,
    passwordInvalidError,
    passwordRequiredError,
} from '../validators';

const emailInputSelector = 'input[name="email"]';
const passwordInputSelector = 'input[name="password"]';
const errorLabelSelector = '.MuiTypography-colorError';
const buttonSelector = 'button';

describe('handling component behaviour', () => {
    let mount = createMount();

    beforeEach(() => {
        mount = createMount();
    });

    afterEach(() => {
        mount.cleanUp();
    });

    test('check render', () => {
        createShallow()(<Form />);
    });

    test('check empty form', () => {
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <Form />
            </ThemeProvider>
        );
        wrapper.find(buttonSelector).simulate('click');

        expect(wrapper.find(errorLabelSelector).first().text()).toEqual(
            emailRequiredError
        );
        expect(wrapper.find(buttonSelector).first().prop('disabled')).toEqual(
            true
        );
    });

    test('check empty email', () => {
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <Form />
            </ThemeProvider>
        );
        const input = wrapper.find(passwordInputSelector).first();

        input.getDOMNode<HTMLInputElement>().value = 'correctPassword';
        input.simulate('change');
        wrapper.find(buttonSelector).simulate('click');

        expect(wrapper.find(errorLabelSelector).first().text()).toEqual(
            emailRequiredError
        );
        expect(wrapper.find(buttonSelector).first().prop('disabled')).toEqual(
            true
        );
    });

    test('check empty password', () => {
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <Form />
            </ThemeProvider>
        );
        const input = wrapper.find(emailInputSelector).first();

        input.getDOMNode<HTMLInputElement>().value = 'test@test.test';
        input.simulate('change');
        wrapper.find(buttonSelector).simulate('click');

        expect(wrapper.find(errorLabelSelector).first().text()).toEqual(
            passwordRequiredError
        );
        expect(wrapper.find(buttonSelector).first().prop('disabled')).toEqual(
            true
        );
    });

    test('check invalid email', () => {
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <Form />
            </ThemeProvider>
        );
        const input = wrapper.find(emailInputSelector).first();

        input.getDOMNode<HTMLInputElement>().value = 'test';
        input.simulate('change');

        expect(wrapper.find(errorLabelSelector).first().text()).toEqual(
            emailInvalidError
        );
        expect(wrapper.find(buttonSelector).first().prop('disabled')).toEqual(
            true
        );
    });

    test('check invalid password', () => {
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <Form />
            </ThemeProvider>
        );
        const emailInput = wrapper.find(emailInputSelector).first();
        const passwordInput = wrapper.find(passwordInputSelector).first();

        emailInput.getDOMNode<HTMLInputElement>().value = 'test@test.test';
        emailInput.simulate('change');
        passwordInput.getDOMNode<HTMLInputElement>().value = 'test';
        passwordInput.simulate('change');

        expect(wrapper.find(errorLabelSelector).first().text()).toEqual(
            passwordInvalidError
        );
        expect(wrapper.find(buttonSelector).first().prop('disabled')).toEqual(
            true
        );
    });
});
