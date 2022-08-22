import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara16.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Kelimeler from '../../components/Common/Kelimeler';
import Pattern from '../../components/Common/Pattern';

class DrawThreePage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image1}
            resizeMode="stretch"
            alt="background">
          </ImageBackground>
        </View>
        <View style={styles.genelContainer}>
          <Text style={styles.titleBir}>3</Text>
          <Text style={styles.titleİki}>
            Aşağıdaki desenler sana ilham verebilir:
          </Text>

          <Text style={styles.rastgele}>Rastgele desen öner</Text>
          <View style={styles.patternContainer}>
            <Pattern image={require('../../assets/pattern.jpg')} />
            <Pattern image={require('../../assets/pattern2.jpg')} />
          </View>
          <ButtonDevam
            image={require('../../assets/icons/right.png')}
            onPressHandler={() =>
              this.props.navigation.navigate('DrawFourPage')
            }
          />
        </View>
      </View>
    );
  }
}

export default DrawThreePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  titleBir: {
    fontWeight: 'bold',
    color: '#E0D1FF',
    fontSize: 20,
    marginTop: 85,
  },
  titleİki: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  genelContainer: {
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  patternContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 45,
  },
});
