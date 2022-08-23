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
import Image1 from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import MoodCard from '../../components/Card/MoodCard';
import {ScrollView} from 'react-native-gesture-handler';
import Background from '../../components/Common/Background';

class WriteFivePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageContainer}
          source={Image1}
          resizeMode="cover"
          alt="background">
          <Background />
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 120,
            }}>
            <View style={styles.writeContainer}>
              <Text style={styles.writetext}>5</Text>
              <Text style={styles.writetitle}>
                Özgür olun, daha da özgür... En özgür hissedeceğiniz hale
                bürünmeye çalışın
              </Text>
              <Text style={styles.writeyazi}>
                Burada sizin için seçilen ortamlarımızdan yararlanabilirsiniz{' '}
              </Text>
            </View>
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
            </View>

            <ButtonDevam
              image={require('../../assets/icons/right.png')}
              onPressHandler={() =>
                this.props.navigation.navigate('WriteSixPage')
              }
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default WriteFivePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  writetitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 4,
    color: 'white',
  },

  writetext: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  writeContainer: {
    margin: 20,
    paddingTop: 5,
    marginTop: 50,
  },
  writeyazi: {
    paddingTop: 10,
    color: 'white',
  },
});
