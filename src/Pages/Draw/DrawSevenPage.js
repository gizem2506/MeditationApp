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
import ButtonDevam from '../../components/Common/ButtonDevam';

class DrawSevenPage extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image1}
            resizeMode="stretch"
            alt="background">
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
    paddingTop: 100,
    marginTop: 90,
  },
});
