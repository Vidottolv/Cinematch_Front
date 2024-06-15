// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';

const DurationMovieSelection = () => {
    //#region CONSTS
    const [selectedDurationMovie, setSelectedDurationMovie] = useState(null);
    const durationmovies = [
      { label: 'Menos de 90 min', value: 1 },
      { label: 'De 90 a 120 min', value: 2 },
      { label: 'Mais de 120 min', value: 3 },];
    const handleCheckboxChange = (value) => {
        selectedDurationMovie(value);
      };
    //#endregion
    useEffect(() => {
        if (selectedDurationMovie !== null) {
          console.log('Selected EndMovie:', selectedDurationMovie);
        }
      }, [selectedDurationMovie]);
  
    return (
        <View style={styles.checkboxContainer}>
            {durationmovies.map((durationmovies) => (
                <CheckBox
                    key={durationmovies.value}
                    title={`${durationmovies.label}`}
                    checked={durationmovies === durationmovies.value}
                    onPress={() => handleCheckboxChange(durationmovies.value)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.checkboxText}
                    checkedColor='#F45B69'
                    uncheckedColor='#F45B69'/>
            ))}
      </View>
    );
};


export default DurationMovieSelection;
