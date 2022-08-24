import {CustomImage} from './CustomImage';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ButtonDevam = props => {
  const {text, onPressHandler, bgColor, image} = props;
  return (
    <TouchableOpacity style={styles.buttondevam} onPress={onPressHandler}>
      <CustomImage
        style={styles.customImage}
        width={20}
        height={20}
        source={image}
      />
    </TouchableOpacity>
  );
};

export default ButtonDevam;

const styles = StyleSheet.create({
  buttondevam: {
    backgroundColor: 'white',
    width: 60,
    height: 45,
    borderRadius: 10,
    alignSelf: 'flex-end',
    padding: 13,
    margin: 20,
    
  },
  customImage:{
   marginLeft:7,
  

  }
});
