import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    product: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48
    },

    productProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 24
    }, 

    productValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    timeLeft: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    daysLeft: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131A',
        lineHeight: 30
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});