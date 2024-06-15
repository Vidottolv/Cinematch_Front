import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const StartQuiz = () => {

    //#region MESSAGES
        const msgQuestion = 'Perguntas para encontrar o melhor filme'
        const contentScreenQuizStart = 'Vamos te fazer algumas perguntas, por favor responda com o máximo de detalhes possível, para que possamos tomar a decisão correta.'
    //#endregion

    return(
    <View style={styles.subContainer}>
        <Image
            source={require('../../assets/cinematch_logo.png')} 
            style={styles.logo}/>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>{msgQuestion}</Text>
                <Text style={styles.description}>{contentScreenQuizStart}</Text>
                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Começar</Text>
                </TouchableOpacity>
            </View>
    </View>
    );
}

export default StartQuiz;
