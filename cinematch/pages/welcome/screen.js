// src/front/cinematch_front/cinematch/pages/welcome/WelcomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';
import styles from './style';
import { fetchData } from './function';

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
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButtonForgetPassword}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    <View style={{width:'15%'}}></View>
                    <TouchableOpacity style={styles.buttonEntrar}>
                        <Text style={styles.textButtonEntrar}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
};

export default Welcome;
