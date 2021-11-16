import React, { useState } from 'react';
import {
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
            alert('Login efetuado com sucesso!');
        }
        else {
            alert('Email ou senha inválidos!');
        }
        // alert(`Email: ${email} \nPassword: ${password}`);
    }

    return(
        <>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Área de Login</Text>

                <View style={styles.loginArea}>
                    <Text>Email</Text>
                    <TextInput
                        type="text"
                        value={email}
                        placeholder="Digite o email"
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />
                    <Text>Senha</Text>
                    <TextInput
                        type="text"
                        value={password}
                        placeholder="Digite sua senha"
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>
                
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.textButton}>LOGAR</Text>
                </TouchableOpacity>
            </View>
        </>    
    )
}