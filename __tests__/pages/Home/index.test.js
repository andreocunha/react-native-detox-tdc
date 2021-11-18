import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Alert } from 'react-native';

import Home from '../../../src/pages/Home';

jest.spyOn(Alert, 'alert');

describe('Home', () => {
    let emailInput;
    let passwordInput;
    let button;
    let json;

    beforeEach(() => {
        const { getByPlaceholderText, getByTestId, toJSON } = render(<Home />);
    
        emailInput = getByPlaceholderText('Digite o email');
        passwordInput = getByPlaceholderText('Digite sua senha');
        button = getByTestId('submitButton');
        json = toJSON();
    });

    afterEach(() => {    
        jest.clearAllMocks();
    });

    it('should render the snapshot', () => {
        expect(json).toMatchSnapshot();
    });

    it('given valid email, valid password and press button, should call alert with success', () => {
        fireEvent.changeText(emailInput, 'valid@email.com');
        fireEvent.changeText(passwordInput, 'Pass123#');
        fireEvent.press(button);

        expect(Alert.alert).toHaveBeenCalledWith('Login efetuado com sucesso!');
        expect(Alert.alert).not.toHaveBeenCalledWith('Email ou senha inválidos!');
    });

    it('given valid email, invalid password and press button, should call alert with fail', () => {
        fireEvent.changeText(emailInput, 'valid@email.com');
        fireEvent.changeText(passwordInput, 'invalid');
        fireEvent.press(button);

        expect(Alert.alert).not.toHaveBeenCalledWith('Login efetuado com sucesso!');
        expect(Alert.alert).toHaveBeenCalledWith('Email ou senha inválidos!');
    });

    it('given invalid email, valid password and press button, should call alert with fail', () => {
        fireEvent.changeText(emailInput, 'invalid');
        fireEvent.changeText(passwordInput, 'Pass123#');
        fireEvent.press(button);

        expect(Alert.alert).not.toHaveBeenCalledWith('Login efetuado com sucesso!');
        expect(Alert.alert).toHaveBeenCalledWith('Email ou senha inválidos!');
    });

    it('given invalid email, invalid password and press button, should call alert with fail', () => {
        fireEvent.changeText(emailInput, 'invalid');
        fireEvent.changeText(passwordInput, 'invalid');
        fireEvent.press(button);

        expect(Alert.alert).not.toHaveBeenCalledWith('Login efetuado com sucesso!');
        expect(Alert.alert).toHaveBeenCalledWith('Email ou senha inválidos!');
    });
});