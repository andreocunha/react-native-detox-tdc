import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';
import styles from './styles'

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        alert(`Email: ${email} \nPassword: ${password}`);
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.title}>Login</Text>
            <TextInput
                type="text"
                value={email}
                placeholder="Digite o email"
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                type="text"
                value={password}
                placeholder="Digite sua senha"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button onPress={handleSubmit} title="Entrar" />
        </View>    
    )
}