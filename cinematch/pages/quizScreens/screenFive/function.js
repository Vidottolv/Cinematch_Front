// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';

const KindMovieSelection = () => {
    //#region CONSTS
    const [selectedKindMovie, setSelectedKindMovie] = useState(null);
    const kindmovies = [
      { label: 'Fantasia', value: 1 },
      { label: 'Ficção científica', value: 2 },
      { label: 'Realidade contemporânea', value: 3 },
      { label: 'Época histórica', value: 4 },
      { label: 'Futuro Distópico', value: 5 },];
    const handleCheckboxChange = (value) => {
        setSelectedKindMovie(value);
      };
    //#endregion
    useEffect(() => {
        if (selectedKindMovie !== null) {
          console.log('Selected EndMovie:', selectedKindMovie);
        }
      }, [selectedKindMovie]);
  
    return (
        <View style={styles.checkboxContainer}>
            {kindmovies.map((kindmovies) => (
                <CheckBox
                    key={kindmovies.value}
                    title={`${kindmovies.label}`}
                    checked={selectedKindMovie === kindmovies.value}
                    onPress={() => handleCheckboxChange(kindmovies.value)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.checkboxText}
                    checkedColor='#F45B69'
                    uncheckedColor='#F45B69'/>
            ))}
      </View>
    );
};


export default KindMovieSelection;
