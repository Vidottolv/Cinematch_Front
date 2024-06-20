// screens/MyScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchDados } from './function';

const StartQuiz = () => {
  const [dados, setDados] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDados();
        setDados(data);
        console.log(data)
      } catch (err) {
        setError(err);
      }
    };

    getData();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Erro ao buscar dados: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {dados.map((item, index) => (
        <Text key={index} style={styles.text}>{item.teste}</Text> // Supondo que sua tabela tem uma coluna 'nome'
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 5,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default StartQuiz;



// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import styles from './style';
// import * as Animatable from 'react-native-animatable';
// import { useNavigation } from '@react-navigation/native';

// const StartQuiz = () => {
//     const navigation = useNavigation()
//     //#region MESSAGES
//         const msgQuestion = 'Perguntas para encontrar o melhor filme'
//         const contentScreenQuizStart = 'Vamos te fazer algumas perguntas, por favor responda com o máximo de detalhes possível, para que possamos tomar a decisão correta.'
//     //#endregion

//     return(
//     <Animatable.View 
//         animation={'lightSpeedIn'}
//         style={styles.subContainer}>
//         <Image
//             source={require('../../assets/cinematch_logo.png')} 
//             style={styles.logo}/>
//             <View style={styles.mainContainer}>
//                 <Text style={styles.title}>{msgQuestion}</Text>
//                 <Text style={styles.description}>{contentScreenQuizStart}</Text>
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('screenone')} 
//                     style={styles.startButton}>
//                     <Text style={styles.startButtonText}>Começar</Text>
//                 </TouchableOpacity>
//             </View>
//     </Animatable.View>
//     );
// }

// export default StartQuiz;
