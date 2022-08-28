import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara8.jpg';
import {Dimensions} from 'react-native';
import Background from '../../components/Common/Background';
import MoodCard from '../../components/Card/MoodCard';

import ButtonDevam from '../../components/Common/ButtonDevam';

class DrawSevenPage extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image1}
            resizeMode="cover"
            alt="background">
            <Background />
          </ImageBackground>
        </View>
        <View style={styles.writeContainer}>
          <Text style={styles.writetext}>7</Text>
          <Text style={styles.writetitle}>
            Özgür olun, daha da özgür... En özgür hissedeceğiniz hale bürünmeye
            çalışın
          </Text>
        </View>
        <Text style={styles.title2}>
          İşte sana ilham verebilecek ortamlarımız!
        </Text>
        <View style={styles.moodContainer}>
          <MoodCard
            title={'Deniz Kenarı'}
            content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
            image={require('../../assets/manzara.png')}
          />
          <MoodCard
            title={'Deniz Kenarı'}
            content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
            image={require('../../assets/manzara2.png')}
          />
          <MoodCard
            title={'Deniz Kenarı'}
            content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
            image={require('../../assets/manzara3.png')}
          />
          <MoodCard
            title={'Deniz Kenarı'}
            content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
            image={require('../../assets/manzara19.png')}
          />
        </View>
        <ButtonDevam
          image={require('../../assets/icons/home.png')}
          onPressHandler={() => this.props.navigation.navigate('Home')}
        />
      </SafeAreaView>
    );
  }
}
export default DrawSevenPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  writetitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 8,
    color: 'white',
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title2: {
    marginLeft: 20,
    fontSize: 15,
    color: 'white',
    marginTop: 10,
  },
  writetext: {
    fontWeight: 'bold',
    color: 'white',
  },
  writeContainer: {
    margin: 20,
    paddingTop: 70,
  },
});