import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Image from '../../assets/moodbg.jpeg';
import {Dimensions} from 'react-native';
import MoodCard from '../Card/MoodCard';
import Background from '../../components/Common/Background';

const {width, height} = Dimensions.get('window');

const MoodScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagecontainer}
        source={Image}
        resizeMode="cover"
        alt="background">
        <Background />
      </ImageBackground>

      <Text style={styles.moodText}>Moods</Text>

      <View style={styles.moodContainer}>
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets//moodbg.jpeg')}
        />
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets//moodbg.jpeg')}
        />
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets//moodbg.jpeg')}
        />
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets//moodbg.jpeg')}
        />
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets//moodbg.jpeg')}
        />
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets//moodbg.jpeg')}
        />
      </View>
    </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  moodText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    margin:20
  },
});
