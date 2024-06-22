// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';
import fetchDados from '../commonFunction';


const API_URL = 'http://10.0.2.2:5207/api/end';

const EndMovieSelection = () => {
    //#region CONSTS
    const [selectedEndMovie, setSelectedEndMovie] = useState(null);
    const [EndMovie, setEndMovie] = useState([]);

    useEffect(() => {
      const getEnd = async () => {
        try {
          const data = await fetchDados(API_URL);
          const formattedEnd = data.map((end) => ({
            label: end.end, 
            value: end.idEnd
          }));
          setEndMovie(formattedEnd);
        } catch (error) {
        }
      };
      getEnd();
    }, []);
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
            {EndMovie.map((endmovies) => (
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
