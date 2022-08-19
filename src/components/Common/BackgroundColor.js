import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const BackgroundColor = () => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={styles.imagecontainer}
          source={Image}
          resizeMode="stretch"
          alt="background"></ImageBackground>
      </View>
      <View style={styles.absolutePurple} />
    </SafeAreaView>
  );
};

export default BackgroundColor;

const styles = StyleSheet.create({
  absolutePurple: {
    flex: 1,
    backgroundColor: 'purple',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    opacity: 0.4,
  },

  imagecontainer: {
    height: height,
    width: width,
  },
});
