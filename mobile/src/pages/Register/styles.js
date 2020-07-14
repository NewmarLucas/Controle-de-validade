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

    Form: {
        alignItems: 'center',
        marginTop: 100
    },

    FormText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 32
    },

    FormTextInput: {
        color: '#333',
        width: '100%',
        height: 60,
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 18
    },

    FormButton: {
        marginBottom: 30,
        marginTop: 16,
        height: 60,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#E02041',
        
    },

    FormButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60
    },
});