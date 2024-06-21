// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';
import styles from '../commonStyle';

const API_URL = 'http://10.0.2.2:5207/api/genre';

const fetchDados = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar gêneros:', error);
    throw error;
  }
};

const MovieGenreSelection = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchDados();
        const formattedGenres = data.map((genre) => ({
          label: genre.genre, 
          value: genre.idGenre
        }));
        setGenres(formattedGenres);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    getGenres();
  }, []);

  const handleCheckboxChange = (value) => {
    setSelectedGenre(value);
  };

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
          uncheckedColor='#F45B69'
        />
      ))}
    </View>
  );
};

export default MovieGenreSelection;
