// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';

const MovieGenreSelection = () => {
    //#region CONSTS
    const [selectedGenre, setSelectedGenre] = useState(null);
    const genres = [
        { label: 'Ação', value: 1 },
        { label: 'Comédia', value: 2 },
        { label: 'Drama', value: 3 },
        { label: 'Terror', value: 4 },
        { label: 'Ficção Científica', value: 5 },
        { label: 'Romance', value: 6 },
        { label: 'Animação', value: 7 },
        { label: 'Documentário', value: 8 },];
    const handleCheckboxChange = (value) => {
        setSelectedGenre(value);
      };
    //#endregion
    useEffect(() => {
        if (selectedGenre !== null) {
          console.log('Selected Genre:', selectedGenre);
        }
      }, [selectedGenre]);
  
    return (
        <View style={styles.checkboxContainer}>
            {genres.map((genre) => (
                <CheckBox
                    key={genre.value}
                    title={`${genre.label}`}
                    checked={selectedGenre === genre.value}
                    onPress={() => handleCheckboxChange(genre.value)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.checkboxText}
                    checkedColor='#F45B69'
                    uncheckedColor='#F45B69'/>
            ))}
      </View>
    );
};


export default MovieGenreSelection;
