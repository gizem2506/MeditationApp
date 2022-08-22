import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Image1 from '../../assets/manzara18.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
const {width, height} = Dimensions.get('window');

class DrawFirstPage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imagecontainer}
            source={Image1}
            resizeMode="stretch"
            alt="background">
          </ImageBackground>
        </View>

        <Text style={styles.text1}>1</Text>
        <Text style={styles.title1}>
          "Şu an" çizmeye başlamak için en iyi andır!
        </Text>

        <Text style={styles.title2}>Daha iyisini beklemeyin.</Text>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() =>
            this.props.navigation.navigate('DrawSecondPage')
          }
        />
      </View>
    );
  }
}

export default DrawFirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagecontainer: {
    height: height,
    width: width,
  },

  text1: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    fontSize: 50,
  },
  title1: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    marginTop: 50,
  },

  title2: {
    marginLeft: 5,
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
});
