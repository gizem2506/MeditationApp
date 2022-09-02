import {CustomImage} from './CustomImage';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const RastgeleButton = props => {
  const {image} = props;
  return (
    <TouchableOpacity style={styles.rastgeleButton}>
      <CustomImage
        style={styles.customImage}
        width={20}
        height={20}
        source={image}
      />
    </TouchableOpacity>
  );
};

export default RastgeleButton;

const styles = StyleSheet.create({});
