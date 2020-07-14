import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const product = route.params.product;
    const message = 'olá';

    function navigateBack() {
        navigation.goBack();
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=67998045970&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.product}>
                <Text style={[styles.productProperty, {marginTop: 0}]}>Produto:</Text>
                <Text style={styles.productValue}>{product.name}</Text>

                <Text style={styles.productProperty}>Codigo de barras:</Text>
                <Text style={styles.productValue}>{product.barcode}</Text>

                <Text style={styles.productProperty}>Validade:</Text>
                <Text style={styles.productValue}>{product.validity}</Text>
            </View>

            <View style={styles.timeLeft}>
                <Text style={styles.daysLeft}>Dias restantes.</Text> 
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={()=> {}}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}