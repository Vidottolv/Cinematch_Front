import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation()

    //#region MESSAGES
        const placeholderEmail = 'E-mail ou número de celular'
        const forgotPassword = 'Esqueceu a senha?'
        const registerWithGoogle = 'Registrar com Google'
        const registerWithFacebook = 'Registrar com Facebook'
        const registerWithApple = 'Registrar com Apple'
    //#endregion

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/cinematch_logo.png')}/>
        <View style={styles.retangle}>
            <Text style={styles.textTitle}>Entrar</Text>
            <View style={styles.containerInput}>
                <TextInput 
                    placeholder={placeholderEmail}
                    placeholderTextColor={'#F54952'}
                    style={styles.input}/>
                <TextInput 
                    placeholder='Senha'
                    placeholderTextColor={'#F54952'}
                    style={styles.input}/>
                <View style={styles.rowButtons}>
                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordText}>{forgotPassword}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('startquiz')}
                        style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.orContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>OU</Text>
                    <View style={styles.line} />
                </View>
                <TouchableOpacity style={styles.loginButtonsCustom}>
                    {/* <Image source={require('../../assets/google_logo.png')}/> */}
                    <Ionicons name='logo-google' size={40} color={'#000'}/>
                    <Text style={styles.defaultTextButtons}>{registerWithGoogle}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonsCustom}>
                    {/* <Image source={require('../../assets/facebook_logo.png')}/> */}
                    <Ionicons name='logo-facebook' size={40} color={'#000'}/>
                    <Text style={styles.defaultTextButtons}>{registerWithFacebook}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonsCustom}>
                    <Ionicons name='logo-apple' size={40} color={'#000'}/>
                    <Text style={styles.defaultTextButtons}>{registerWithApple}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default Welcome;
