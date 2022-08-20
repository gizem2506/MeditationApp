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
import Kitap1 from '../../assets/yazmasanati.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import BackgroundColor from '../../components/Common/BackgroundColor';

class WriteFourPage extends React.Component {
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
        <View style={styles.genelContainer}>
          <Text style={styles.titleBir}>4</Text>
          <Text style={styles.titleİki}>
            Çok okumak, daha güzel yazmak için bir yoldur. Eğer ilhamınızın
            kapalı olduğunu düşünüyorsanız yazmayı bırakın ve okumaya başlayın.
          </Text>
          <Text style={styles.rastgele}>Rastgele kitap öner</Text>
        </View>
        <View style={styles.kitapContainer}>
          <View>
            <Image style={styles.kitaplogo} source={Kitap1} />
            <Text style={styles.kitapTitle}>Yazma Sanatı</Text>
            <Text style={styles.kitapText}>Stephen King</Text>
          </View>
          <View>
            <Image style={styles.kitaplogo} source={Kitap1} />
            <Text style={styles.kitapTitle}>Yazma Sanatı</Text>
            <Text style={styles.kitapText}>Stephen King</Text>
          </View>
        </View>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('WriteFivePage')}
        />
      </SafeAreaView>
    );
  }
}
export default WriteFourPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  kitaplogo: {
    width: 140,
    height: 170,
  },
  kitapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin:5,
  },
  kitapTitle: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 18,
    textAlign: 'center'
  },
  kitapText: {
    color: 'white',
    textAlign: 'center'

  },
  titleBir: {
    fontWeight: 'bold',
    color: '#E0D1FF',
    fontSize: 20,
    marginTop: 15,
  },
  titleİki: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  genelContainer: {
    borderRadius: 20,
    margin: 5,
    padding: 15,
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
});
