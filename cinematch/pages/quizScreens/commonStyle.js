import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        backgroundColor: '#422680',
        padding: 20,
    },
    mainContainer: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:'-15%'
    },
    rowButtonStep: {
        flexDirection:'row',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    title: {
        color: '#F54952',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        color: '#F54952',
        fontSize: 16,
        textAlign: 'center',
    },
    startButton: {
        backgroundColor: '#660F56',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        width:'45%',
    },
    startButtonText: {
        color: '#F54952',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    backButton: {
        backgroundColor: '#848484',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        width:'45%'
    },
    backButtonText: {
        color: '#FFF',
        fontSize:18,
        fontWeight:'bold', 
        alignSelf:'center' 
    },
    checkboxContainer: {
        justifyContent: 'center',
        marginTop:'5%',
        marginBottom:'10%'
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
    },
    checkboxText: {
        color: '#F54952',
        fontSize: 18,
    },
});

export default styles;