import React from 'react';
import {Image, StyleSheet, View, ImageBackground} from 'react-native';
const Background = props => {
  const {image} = props;

  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
      <View style={styles.overlay} />
    </ImageBackground>
  );
};

export default Background;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#6320EE',
    opacity: 0.6,
  },
});
