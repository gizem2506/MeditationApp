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

import MoodCard from '../Card/MoodCard';
const MoodScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagecontainer}
          source={Image}
          resizeMode="stretch"
          alt="background"></ImageBackground>
      </View>
      <MoodCard />
    </SafeAreaView>
  );
};

export default MoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagecontainer: {
    height: height,
    width: width,
  },
});
