// src/front/cinematch_front/cinematch/pages/welcome/WelcomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { fetchData } from './function';
import { Ionicons } from "@expo/vector-icons";



const Welcome = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
    };
    loadData();
  }, []);

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/cinematch_logo.png')}/>
        <View style={styles.retangle}>
            <Text style={styles.textTitle}>Entrar</Text>
            <View style={styles.containerInput}>
                <TextInput 
                    placeholder='E-mail ou número de celular'
                    placeholderTextColor={'#F54952'}
                    style={styles.input}/>
                <TextInput 
                    placeholder='Senha'
                    placeholderTextColor={'#F54952'}
                    style={styles.input}/>
                <View style={styles.rowButtons}>
                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton}>
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
                    <Text style={styles.defaultTextButtons}>Registrar com Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonsCustom}>
                    {/* <Image source={require('../../assets/facebook_logo.png')}/> */}
                    <Ionicons name='logo-facebook' size={40} color={'#000'}/>
                    <Text style={styles.defaultTextButtons}>Registrar com Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonsCustom}>
                    <Ionicons name='logo-apple' size={40} color={'#000'}/>
                    <Text style={styles.defaultTextButtons}>Registrar com Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default Welcome;
