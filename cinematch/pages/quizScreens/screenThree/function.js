// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';
import fetchDados from '../commonFunction';

const API_URL = 'http://10.0.2.2:5207/api/age';

const AgeMovieSelection = () => {
  const [selectedAgeMovie, setSelectedAgeMovie] = useState(null);
  const [AgeMovie, setAgeMovie] = useState([]);

  useEffect(() => {
    const getAge = async () => {
      try {
        const data = await fetchDados(API_URL);
        const formattedAges = data.map((age) => ({
          label: age.age, 
          value: age.idAge
        }));
        setAgeMovie(formattedAges);
      } catch (error) {
      }
    };
    getAge();
  }, []);
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
            {AgeMovie.map((age) => (
                <CheckBox
                    key={age.value}
                    title={`${age.label}`}
                    checked={selectedAgeMovie === age.value}
                    onPress={() => handleCheckboxChange(age.value)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.checkboxText}
                    checkedColor='#F45B69'
                    uncheckedColor='#F45B69'/>
            ))}
      </View>
    );
};


export default AgeMovieSelection;
