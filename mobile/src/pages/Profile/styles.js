import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    }, 

    description: {
        fontSize: 16,
        lineHeight: 34,
        color: '#E02041'
    },

    productList: {
        marginTop: 32, 
    },

    product: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    productProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    }, 

    productValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailButtontrash: {
        position: 'absolute',
        right: 24,
        top: 24
    },

    detailButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});