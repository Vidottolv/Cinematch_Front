import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const RecoveryPassword = () => {
    const navigation = useNavigation()

    //#region MESSAGES
        const titleMsg = 'Esqueceu sua senha?'
        const cancel = 'CANCELAR'
        const send = 'ENVIAR'
        const placeholderEmail = 'Insira seu E-mail'
        const placeholderConfirmEmail = 'Confirme seu E-Mail'
        const detailedMessage = 'Sem problemas! Preencha os dados abaixo e, em seguida, siga as instruções que receberá por e- mail. Insira o e-mail com que se registrou no CineMatch.'
    //#endregion

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/cinematch_logo.png')}/>
        <View style={styles.retangle}>
            <Text style={styles.textTitle}>{titleMsg}</Text>
            <Text style={styles.detailedMessageText}>{detailedMessage}</Text>
            <View style={styles.containerInput}>
                <TextInput 
                    placeholder={placeholderEmail}
                    placeholderTextColor={'#F54952'}
                    style={styles.input}/>
                <TextInput 
                    placeholder={placeholderConfirmEmail}
                    placeholderTextColor={'#F54952'}
                    style={styles.input}/>
            <View style={styles.rowButtons}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}>
                        <Text style={styles.backButtonText}>{cancel}</Text>
                    </TouchableOpacity>
                    <View style={{width:'10%'}}></View>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('successpassword')}
                        style={styles.confirmButton}>
                        <Text style={styles.confirmButtonText}>{send}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
};

export default RecoveryPassword;
