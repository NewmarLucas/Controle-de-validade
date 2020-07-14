import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, Alert, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import logoImg from '../../assets/logo.png';

import styles from './styles';

import api from '../../services/api';

export default function Create() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [barcode, setBarcode] = useState('');
    const [validity, setValidity] = useState('');

    const [valueid, setValueid] = useState('');

    async function createProd() {
        await AsyncStorage.getItem('userID').then((value) => { setValueid(value) })

        const data = {
            name,
            barcode,
            validity,
        };

        try {
            await api.post('products', data, {
                headers: {
                    Authorization: valueid
                }
            });

        } catch (error) {
            Alert.alert(
                'Falha ao criar novo produto',
                'Confira os dados e tente novamente!',
                [
                    { text: 'OK' },
                ],
            )
        }

    }


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
                <TextInput
                    style={styles.FormTextInput}
                    placeholder="Insira o nome do produto"
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={styles.FormTextInput}
                    placeholder="Insira o codigo de barras"
                    onChangeText={text => setBarcode(text)}
                />
                <TextInput
                    style={styles.FormTextInput}
                    placeholder="Insira a data de validade"
                    onChangeText={text => setValidity(text)}
                />

                <TouchableOpacity style={styles.FormButton} onPress={createProd}><Text style={styles.FormButtonText}>Cadastrar novo produto</Text></TouchableOpacity>
            </View>
        </View>
    );
}