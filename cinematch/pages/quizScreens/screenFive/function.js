// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';
import fetchDados from '../commonFunction';

const API_URL = 'http://10.0.2.2:5207/api/kind';

const KindMovieSelection = () => {
    //#region CONSTS
    const [selectedKindMovie, setSelectedKindMovie] = useState(null);
    const [KindMovie, setKindMovie] = useState([]);

    useEffect(() => {
      const getKind = async () => {
        try {
          const data = await fetchDados(API_URL);
          const formattedKind = data.map((kind) => ({
            label: kind.kind, 
            value: kind.idKind
          }));
          setKindMovie(formattedKind);
        } catch (error) {
        }
      };
      getKind();
    }, []);

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
            {KindMovie.map((kindmovies) => (
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
