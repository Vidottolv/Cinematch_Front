// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';
import fetchDados from '../commonFunction';

const API_URL = 'http://10.0.2.2:5207/api/duration';

const DurationMovieSelection = () => {
    //#region CONSTS
    const [selectedDurationMovie, setSelectedDurationMovie] = useState(null);
    const [DurationMovie, setDurationMovie] = useState([]);

    useEffect(() => {
      const getDuration = async () => {
        try {
          const data = await fetchDados(API_URL);
          const formattedDuration = data.map((duration) => ({
            label: duration.durationMovie, 
            value: duration.idDuration
          }));
          setDurationMovie(formattedDuration);
        } catch (error) {
        }
      };
      getDuration();
    }, []);

    const handleCheckboxChange = (value) => {
        setSelectedDurationMovie(value);
      };
    //#endregion
    useEffect(() => {
        if (selectedDurationMovie !== null) {
          console.log('Selected EndMovie:', selectedDurationMovie);
        }
      }, [selectedDurationMovie]);
  
    return (
        <View style={styles.checkboxContainer}>
            {DurationMovie.map((durationmovies) => (
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
