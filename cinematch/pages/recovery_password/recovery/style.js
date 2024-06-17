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
        borderRadius: 8,
    },
    textTitle: {
        // fontFamily:'Inter',
        fontSize: 38,
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
        marginTop:30,
        width:'90%',
        height:60,
        borderRadius:8,
        backgroundColor:'#FFF'
    },
    rowButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%', 
        marginTop: '10%',
    },
    detailedMessageText: {
        color: '#F45B69',
        marginTop:'3%',
        fontSize:16,
        marginLeft: 20,
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
    confirmButton: {
        backgroundColor: '#660F56',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width:'45%',
    },
    confirmButtonText: {
        color: '#F54952',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    backButton: {
        backgroundColor: '#848484',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width:'45%'
    },
    backButtonText: {
        color: '#FFF',
        fontSize:18,
        fontWeight:'bold', 
        alignSelf:'center' 
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
