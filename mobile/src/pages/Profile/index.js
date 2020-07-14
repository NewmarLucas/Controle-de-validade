import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, Alert, TouchableOpacity, AsyncStorage, _Text } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Profile() {
    const [product, setProduct] = useState([]);
    const [valueid, setValueid] = useState('');

    const navigation = useNavigation();

    async function getID() {
        await AsyncStorage.getItem('userID').then((value) => { setValueid(value) })
    };

    function navigationToDetail(product) {
        navigation.navigate('Detail', { product });
    }

    function navigationToCreate() {
        navigation.navigate('Create');
    }


    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: valueid,
            }
        }).then(response => {
            setProduct(response.data)
        })
    }, [valueid]);

    async function handleDeleteProduct(id) {
        try {
          await api.delete('products/' + id, {
              headers: {
                  Authorization: valueid
              }
          });

          setProduct(product.filter(product => product.id !== id));
        } catch (error) {
            Alert.alert(
                'Falha ao deletar caso',
                'Tente novamente!',
                [
                    { text: 'OK' },
                ],
            )
        }
    }

    return (


        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity style={styles.detailButton} onPress={navigationToCreate}>
                    <Feather name="plus" size={30} color="#E02041" />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <TouchableOpacity onPress={getID}>
                <Text style={styles.description}>Clique aqui para mostrar lista de produtos</Text>
            </TouchableOpacity>

            <FlatList
                data={product}
                style={styles.productList}
                keyExtractor={product => String(product.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: product }) => (
                    <View style={styles.product}>
                        <Text style={styles.productProperty}>Produto:</Text>
                        <Text style={styles.productValue}>{product.name}</Text>

                        <Text style={styles.productProperty}>Codigo de barras:</Text>
                        <Text style={styles.productValue}>{product.barcode}</Text>

                        <Text style={styles.productProperty}>Validade:</Text>
                        <Text style={styles.productValue}>{product.validity}</Text>

                        <TouchableOpacity style={styles.detailButton} onPress={() => navigationToDetail(product)}>
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.detailButtontrash} onPress={() => handleDeleteProduct(product.id)}>
                            <Feather name="trash-2" size={20} color="#A8A8B3" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}