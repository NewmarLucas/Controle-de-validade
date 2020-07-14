import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Alert, TextInput, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import styles from './styles';

export default function Login() {
    const navigation = useNavigation();

    const [id, onChangeText] = React.useState('');

    async function handleLogin() {
        try {
            const response = await api.post('sessions', { id });

                try{ 
                    AsyncStorage.setItem(
                        'userID',
                        id,
                    );
                } catch (err) {
                    console.log('deu erro aqui');
                }

            navigation.navigate('Profile');

        } catch (err) {
            Alert.alert(
                'Falha no Login',
                'Confira os dados e tente novamente!',
                [
                    { text: 'OK' },
                ],
            )
        }
    }

    function navigationToRegister() {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>

            <View style={styles.Form}>
                <Text style={styles.FormText}>
                    Faça seu Login
                </Text>
                <TextInput
                    style={styles.FormTextInput}
                    onChangeText={text => onChangeText(text)}
                    id={id}
                    placeholder="Digite sua ID"
                />
                <TouchableOpacity style={styles.FormButton} onPress={handleLogin}>
                    <Text style={styles.FormButtonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigationToRegister}>
                    <Text style={styles.registerButtonText}><Feather name="log-in" size={18} color="#E82041" /> Não tenho cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}