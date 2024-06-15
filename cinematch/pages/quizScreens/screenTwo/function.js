// MovieGenreSelection.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../commonStyle';

const StoryTypeSelection = () => {
    //#region CONSTS
    const [selectedStoryType, setSelectedStoryType] = useState(null);
    const storyTypes = [
        { label: 'Baseado em Fatos Reais', value: 1 },
        { label: 'Totalmente Fictícios', value: 2 },
        { label: 'Mistura de Realidade e Ficção', value: 3 }];
    const handleCheckboxChange = (value) => {
        setSelectedStoryType(value);
      };
    //#endregion
    useEffect(() => {
        if (selectedStoryType !== null) {
          console.log('Selected StoryType:', selectedStoryType);
        }
      }, [selectedStoryType]);
  
    return (
        <View style={styles.checkboxContainer}>
            {storyTypes.map((storyTypes) => (
                <CheckBox
                    key={storyTypes.value}
                    title={`${storyTypes.label}`}
                    checked={selectedStoryType === storyTypes.value}
                    onPress={() => handleCheckboxChange(storyTypes.value)}
                    containerStyle={styles.checkbox}
                    textStyle={styles.checkboxText}
                    checkedColor='#F45B69'
                    uncheckedColor='#F45B69'/>
            ))}
      </View>
    );
};


export default StoryTypeSelection;
