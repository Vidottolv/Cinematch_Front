import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#422680',
        alignItems: 'center',
        justifyContent: 'center',
    },
    retangle: {
        // marginTop:'25%',
        width: '85%',
        height: '70%',
        backgroundColor: '#280659',
        borderRadius: 15,
    },
    textTitle: {
        // fontFamily:'Inter',
        fontSize: 28,
        fontWeight:'bold',
        color: '#F54952',
        marginLeft:'5%',
        marginTop:'10%'
    },
    containerInput: {
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        paddingLeft:10,
        marginTop:20,
        width:'90%',
        height:60,
        borderRadius:8,
        backgroundColor:'#FFF'
    },
    rowButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%', 
        marginTop: '5%',
    },
    forgotPasswordButton: {
        marginRight: 20,
    },
    forgotPasswordText:{
        color: '#F45B69',
        fontSize: 15,
    },
    defaultTextButtons: {
        color: '#F45B69',
        fontSize: 15,
        marginLeft:'15%',
        fontWeight:'bold'
    },
    loginButton: {
      backgroundColor: '#8D2456',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    loginButtonText: {
      color: '#F45B69',
      fontSize: 18,
      fontWeight: 'bold',
    },
    orContainer: {
        paddingHorizontal:5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    line: {
      height: 1,
      flex: 1,
      backgroundColor: '#F45B69', 
    },
    orText: {
      marginHorizontal: 10,
      color: '#F45B69',
    },
    loginButtonsCustom: {
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        justifyContent:'flex-start',
        // paddingLeft:20,
        marginTop:'5%',
        width:'90%',
        height:50,
        borderRadius:8,
        backgroundColor:'#FFF'
    },
});

export default styles;
