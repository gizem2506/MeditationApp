import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara9.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';

class ThinkSecondPage extends React.Component {
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
        <View style={styles.thinkContainer}>
          <Text style={styles.thinktext}>2</Text>
          <Text style={styles.thinktitle}>
            Kendinizin veya çevrenizdekilerin yaşadığı sorunları düşünün
          </Text>
          <Text style={styles.thinkyazi}>
            Unutmayın her problem için ürün çıkmış olsa da ne kadarının sorunu
            çözdüğünü bilemeyiz.{' '}
          </Text>
        </View>

        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() =>
            this.props.navigation.navigate('ThinkThreePage')
          }
        />
      </View>
    );
  }
}
export default ThinkSecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  thinktitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },

  thinktext: {
    fontSize: 15,
    color: 'white',
  },
  thinkContainer: {
    margin: 45,
    paddingTop: 170,
    marginTop: 100,
  
  },
  thinkyazi: {
    marginLeft: 5,
    color: 'white',
    margin:20
    
  },
});
