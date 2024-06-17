import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainerRefContext, useNavigation } from '@react-navigation/native';

const RecoverySuccessPassword = () => {
    const navigation = useNavigation()

    //#region MESSAGES
        const titleMsg = 'Sucesso'
        const back = 'VOLTAR'
        const detailedMessage = 'Para ter acesso a sua senha, verifique o e-mail informado na recuperação. Caso não encontre na caixa de entrada verifique o spam.'
    //#endregion

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/cinematch_logo.png')}/>
        <View style={styles.retangle}>
            <Text style={styles.textTitle}>{titleMsg}</Text>
            <Text style={styles.detailedMessageText}>{detailedMessage}</Text>
            <View style={styles.containerInput}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('welcome')}
                    style={styles.backButton}>
                    <Text style={styles.backButtonText}>{back}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default RecoverySuccessPassword;
