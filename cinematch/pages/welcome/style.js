// src/front/cinematch_front/cinematch/pages/welcome/WelcomeStyles.js

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
        marginTop:'25%',
        width: '75%',
        height: '60%',
        backgroundColor: '#280659',
        borderRadius: 5,
    },
    textTitle: {
        fontFamily:'Inter',
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
        marginTop:20,
        width:'90%',
        height:60,
        borderRadius:8,
        backgroundColor:'#FFF'
    },
    rowButtons:{
        flexDirection: 'row',
        // columnGap: 40,
        marginTop:'5%',
        justifyContent:'space-evenly'
    },
    button:{
        justifyContent:'center',
        alignItems:'center'
    },
    buttonEntrar:{
        backgroundColor:'#660F56',
        width:'30%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    textButtonForgetPassword: {
        color:'#F54952',
        fontSize:16,
    },
    textButtonEntrar:{
        color:'#F54952',
        fontSize:22,
    }
});

export default styles;
