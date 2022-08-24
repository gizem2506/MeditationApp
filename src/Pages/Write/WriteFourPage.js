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
import Image1 from '../../assets/manzara14.jpg';
import Kitap1 from '../../assets/yazmasanati.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Book from '../../components/Common/Book';
import {CustomImage} from '../../components/Common/CustomImage';
import {ScrollView} from 'react-native-gesture-handler';
import Background from '../../components/Common/Background';

class WriteFourPage extends React.Component {
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
        <View style={styles.genelContainer}>
          <Text style={styles.titleBir}>4</Text>
          <Text style={styles.titleİki}>
            Çok okumak, daha güzel yazmak için bir yoldur. Eğer ilhamınızın
            kapalı olduğunu düşünüyorsanız yazmayı bırakın ve okumaya başlayın.
          </Text>
          <Text style={styles.rastgele}>Rastgele kitap öner</Text>
        </View>
        <View style={styles.bookContainer}>
          <Book
            title={'Yazma Sanatı'}
            content={'Stephan King'}
            image={require('../../assets/yazmasanati.jpg')}
          />
          <Book
            title={'Yazma Sanatı'}
            content={'Stephan King'}
            image={require('../../assets/yazmasanati.jpg')}
          />
          <Book
            title={'Yazma Sanatı'}
            content={'Stephan King'}
            image={require('../../assets/yazmasanati.jpg')}
          />
          <Book
            title={'Yazma Sanatı'}
            content={'Stephan King'}
            image={require('../../assets/yazmasanati.jpg')}
          />
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

  titleBir: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    marginTop: 9,
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
    margin: 8,
    padding: 10,
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },

  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding:5,
  },
});
