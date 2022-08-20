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
import BackgroundColor from '../../components/Common/BackgroundColor';
import MoodCard from '../../components/Card/MoodCard';

class WriteFivePage extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image1}
            resizeMode="stretch"
            alt="background">
            <BackgroundColor />
          </ImageBackground>
        </View>
        <View style={styles.writeContainer}>
          <Text style={styles.writetext}>5</Text>
          <Text style={styles.writetitle}>
            Rastgele bir şeyler karalamaya başla ! Belkide gerisi gelir...
          </Text>
        </View>

        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('DrawSixPage')}
        />
      </SafeAreaView>
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
  writetitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 8,
    color: 'white',
  },

  writetext: {
    fontWeight: 'bold',
    color: 'white',
  },
  writeContainer: {
    margin: 20,
    paddingTop: 100,
    marginTop: 90,
  },
});