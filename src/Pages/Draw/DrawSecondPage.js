import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import BackgroundColor from '../../components/Common/BackgroundColor';
class DrawSecondPage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image1}
            resizeMode="stretch"
            alt="background">
            <BackgroundColor />
          </ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textBir}>2 </Text>
          <Text style={styles.textİki}>
            Challange'ler sizi motive edecek en güzel yöntemdir.Çizmeyle alakalı
            challange önerileri:
          </Text>
          <Text style={styles.rastgele}>Rastgele challange öner</Text>
        </View>

        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() =>
            this.props.navigation.navigate('DrawThreePage')
          }
        />
      </View>
    );
  }
}
export default DrawSecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  textBir: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 80,
  },
  textİki: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  textContainer: {
    margin: 10,
  },

  rastgele: {
    color: '#56E1FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
