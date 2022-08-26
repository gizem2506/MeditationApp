import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Image1 from '../../assets/moodbg.jpeg';
import {Dimensions} from 'react-native';
import MoodCard from '../Card/MoodCard';
import Background from '../../components/Common/Background';
import ButtonDevam from '../../components/Common/ButtonDevam';
import {BlurView} from '@react-native-community/blur';

const {width, height} = Dimensions.get('window');

const MoodScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagecontainer}
        source={Image1}
        resizeMode="cover"
        alt="background"></ImageBackground>

      <Background />
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
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => navigation.navigate('Home')}
        />
      </View>
      <BlurView
        intensity={25}
        tint="light"
        style={styles.blurContainer}></BlurView>
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
    marginTop: 40,
  },
  blurContainer: {
    justifyContent: 'center',
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
    margin: 20,
  },
});
