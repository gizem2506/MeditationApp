import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara19.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import {CustomImage} from '../../components/Common/CustomImage';
import Book from '../../components/Common/Book';
import Challange from '../../components/Common/Challenge';
import Background from '../../components/Common/Background';

class DrawSecondPage extends React.Component {
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
        <View style={styles.textContainer}>
          <Text style={styles.textBir}>2 </Text>
          <Text style={styles.textİki}>
            Challange'ler sizi motive edecek en güzel yöntemdir.Çizmeyle alakalı
            challange önerileri:
          </Text>
          <Text style={styles.rastgele}>Rastgele challange öner</Text>
        </View>
        <View style={styles.challangeContainer}>
          <Challange image={require('../../assets/drawche.jpg')} />
          <Challange image={require('../../assets/drawche2.jpg')} />
        </View>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('DrawThreePage')}
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
    marginTop: 120,
  },
  textİki: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 9,
  },
  textContainer: {
    margin: 20,
  },

  rastgele: {
    color: '#56E1FF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  challangeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingLeft: 18,
  },
});
