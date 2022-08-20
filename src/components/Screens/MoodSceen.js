import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import MoodCard from '../Card/MoodCard';
import BackgroundColor from '../Common/BackgroundColor';

const {width, height} = Dimensions.get('window');

const servistenGelenDatalar = [
  {
    title: 'Title 1',
    content: 'Content 1',
    image: require('../../assets/moodbg.jpeg'),
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    image: require('../../assets/moodbg.jpeg'),
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    image: require('../../assets/moodbg.jpeg'),
  },
  {
    title: 'Title 4',
    content: 'Content 4',
    image: require('../../assets/moodbg.jpeg'),
  },
  {
    title: 'Title 5',
    content: 'Content 5',
    image: require('../../assets/moodbg.jpeg'),
  },
];

const MoodScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <BackgroundColor />

        <ImageBackground
          style={styles.imagecontainer}
          source={Image}
          resizeMode="stretch"
          alt="background"></ImageBackground>

        <View style={styles.moodContainer}>
          {servistenGelenDatalar.map((item, index) => {
            return <MoodCard item={item} key={index} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoodScreen;

const styles = StyleSheet.create({
  moodContainer: {
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
});
