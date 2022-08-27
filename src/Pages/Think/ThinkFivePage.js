import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara18.jpg';
import {Dimensions} from 'react-native';
import MoodCard from '../../components/Card/MoodCard';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';


class ThinkFivePage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image1}
            resizeMode="cover"
            alt="background">
            <Background />
          </ImageBackground>
        </View>
        <View style={styles.thinkContainer}>
          <Text style={styles.thinktext}>5</Text>
          <Text style={styles.thinktitle}>
            Zihninin boş olacağı bir ortamde düşünmek ister misin?
          </Text>
          <Text style={styles.thinkyazi}>
            İşte sana ilham verebilecek ortamlarımız!{' '}
          </Text>
        </View>
        <View style={styles.moodContainer}>
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets/manzara13.jpg')}
        />
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets/manzara10.jpg')}
        />
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets/manzara17.jpg')}
        />
        <MoodCard
          title={'Deniz Kenarı'}
          content={'Kendinizi deniz kenarında hissetmeye hazır mısınız?'}
          image={require('../../assets/manzara11.jpg')}
        />
       
      </View>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('ThinkSixPage')}
        />
      </View>
    );
  }
}
export default ThinkFivePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  thinktitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },

  thinktext: {
    fontSize: 15,
    color: 'white',
  },
  thinkContainer: {
    margin: 30,
    paddingTop: 40,
    marginTop: 30,
  },
  thinkyazi: {
    marginLeft: 3,
    color: 'white',
    margin: 20,
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
