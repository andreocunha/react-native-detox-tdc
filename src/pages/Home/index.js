import React, { useState } from 'react';
import {
    Alert,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Header } from '../../components/Header';
import { isValidEmail, isValidPassword } from '../../utils/loginValidator';
import styles from './styles';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        if (isValidEmail(email) && isValidPassword(password)) {
            Alert.alert('Login efetuado com sucesso!');
        }
        else {
            Alert.alert('Email ou senha inválidos!');
        }
    }

    return(
        <>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Área de Login</Text>

                <View style={styles.loginArea}>
                    <Text>Email</Text>
                    <TextInput
                        testID="emailInput"
                        type="text"
                        value={email}
                        placeholder="Digite o email"
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />
                    <Text>Senha</Text>
                    <TextInput
                        testID="passwordInput"
                        type="text"
                        value={password}
                        placeholder="Digite sua senha"
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>
                
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.button}
                    testID="submitButton"
                >
                    <Text style={styles.textButton}>LOGAR</Text>
                </TouchableOpacity>
            </View>
        </>    
    )
}