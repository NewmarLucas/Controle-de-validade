import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function Register() {

    async function handleRegister() {
        
        const response = await api.post('user', {username});
        Alert.alert(
            'Anote sua ID:',
            response.data.id,
            [
                {text: 'OK'},
            ],
        )
    }
    
    const navigation = useNavigation();

    const [username, onChangeText] = React.useState('');


    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.Form}>
                <Text style={styles.FormText}>Cadastro</Text>

                <TextInput
                    style={styles.FormTextInput}
                    onChangeText={text => onChangeText(text)}
                    username={username}
                    placeholder="Digite seu nome"
                />
                <TouchableOpacity style={styles.FormButton} onPress={handleRegister}>
                    <Text style={styles.FormButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}