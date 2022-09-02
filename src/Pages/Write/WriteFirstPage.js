import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Image1 from '../../assets/manzara2.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';
const {width, height} = Dimensions.get('window');
class WriteFirstPage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imagecontainer}
            source={Image1}
            resizeMode="cover"
            alt="background">
            <Background />
          </ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>1</Text>
          <Text style={styles.title1}>
            "Şu an" yazmaya başlamak için en iyi andır!
          </Text>

          <Text style={styles.title2}>Daha iyisini beklemeyin.</Text>
        </View>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() =>
            this.props.navigation.navigate('WriteSecondPage')
          }
        />
      </View>
    );
  }
}

export default WriteFirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagecontainer: {
    height: height,
    width: width,
  },
  textContainer: {
    margin: 10,
  },

  text1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 100,
  },
  title1: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    marginTop: 10,
  },

  title2: {
    marginLeft: 5,
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
});
