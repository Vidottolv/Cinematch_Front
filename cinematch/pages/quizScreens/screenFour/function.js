// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';

const EndMovieSelection = () => {
    //#region CONSTS
    const [selectedEndMovie, setSelectedEndMovie] = useState(null);
    const endmovies = [
      { label: 'Com finais felizes', value: 1 },
      { label: 'Com finais tristes', value: 2 },
      { label: 'Com finais abertos a interpretações', value: 3 },
      { label: 'Com reviravoltas', value: 4 },];
    const handleCheckboxChange = (value) => {
        setSelectedEndMovie(value);
      };
    //#endregion
    useEffect(() => {
        if (selectedEndMovie !== null) {
          console.log('Selected EndMovie:', selectedEndMovie);
        }
      }, [selectedEndMovie]);
  
    return (
        <View style={styles.checkboxContainer}>
            {endmovies.map((endmovies) => (
                <CheckBox
                    key={endmovies.value}
                    title={`${endmovies.label}`}
                    checked={selectedEndMovie === endmovies.value}
                    onPress={() => handleCheckboxChange(endmovies.value)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.checkboxText}
                    checkedColor='#F45B69'
                    uncheckedColor='#F45B69'/>
            ))}
      </View>
    );
};


export default EndMovieSelection;
