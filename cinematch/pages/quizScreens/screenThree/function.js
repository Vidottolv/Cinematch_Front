// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';

const AgeMovieSelection = () => {
    //#region CONSTS
    const [selectedAgeMovie, setSelectedAgeMovie] = useState(null);
    const agemovies = [
        { label: 'Baseado em Fatos Reais', value: 1 },
        { label: 'Totalmente Fictícios', value: 2 },
        { label: 'Mistura de Realidade e Ficção', value: 3 }];
    const handleCheckboxChange = (value) => {
        setSelectedAgeMovie(value);
      };
    //#endregion
    useEffect(() => {
        if (selectedAgeMovie !== null) {
          console.log('Selected AgeMovie:', selectedAgeMovie);
        }
      }, [selectedAgeMovie]);
  
    return (
        <View style={styles.checkboxContainer}>
            {agemovies.map((agemovies) => (
                <CheckBox
                    key={agemovies.value}
                    title={`${agemovies.label}`}
                    checked={selectedAgeMovie === agemovies.value}
                    onPress={() => handleCheckboxChange(agemovies.value)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.checkboxText}
                    checkedColor='#F45B69'
                    uncheckedColor='#F45B69'/>
            ))}
      </View>
    );
};


export default AgeMovieSelection;
