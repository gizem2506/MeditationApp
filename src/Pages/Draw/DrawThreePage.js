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
import Background from '../../components/Common/Background';
import RastgeleButton from '../../components/Common/RastgeleButton';

class DrawThreePage extends React.Component {
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
        <View style={styles.genelContainer}>
          <Text style={styles.titleBir}>3</Text>
          <Text style={styles.titleİki}>
            Aşağıdaki desenler sana ilham verebilir:
          </Text>
          <View style={styles.rastgeleIcon}>
            <RastgeleButton image={require('../../assets/icons/refresh.png')} />
            <Text style={styles.rastgele}>Rastgele desen öner</Text>
          </View>
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
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  rastgeleIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop:18
  },
  titleBir: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 100,
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
    margin: 10,
    padding: 15,
  },
  patternContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 45,
  },
});
