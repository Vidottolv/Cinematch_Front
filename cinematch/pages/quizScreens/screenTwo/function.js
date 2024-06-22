// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';
import fetchDados from '../commonFunction';


const API_URL = 'http://10.0.2.2:5207/api/storytype';

const StoryTypeSelection = () => {
  const [selectedStoryType, setSelectedStoryType] = useState(null);
  const [storyTypes, setStorytype] = useState([]);

  useEffect(() => {
    const getStoryType = async () => {
      try {
        const data = await fetchDados(API_URL);
        const formattedStoryType = data.map((storyType) => ({
          label: storyType.storyType, 
          value: storyType.idStoryType
        }));
        setStorytype(formattedStoryType);
      } catch (error) {
      }
    };
    getStoryType();
  }, []);

  const handleCheckboxChange = (value) => {
    setSelectedStoryType(value);
  };

  useEffect(() => {
    if (selectedStoryType !== null) {
      console.log('Selected storytype:', selectedStoryType);
    }
  }, [selectedStoryType]);
  
    return (
        <View style={styles.checkboxContainer}>
            {storyTypes.map((storyType) => (
                <CheckBox
                    key={storyType.value}
                    title={`${storyType.label}`}
                    checked={selectedStoryType === storyType.value}
                    onPress={() => handleCheckboxChange(storyType.value)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.checkboxText}
                    checkedColor='#F45B69'
                    uncheckedColor='#F45B69'/>
            ))}
      </View>
    );
};


export default StoryTypeSelection;
