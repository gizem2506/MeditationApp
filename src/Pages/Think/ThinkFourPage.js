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
import Background from '../../components/Common/Background';

class ThinkFourPage extends React.Component {
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
        <View style={styles.thinkContainer}>
          <Text style={styles.thinktext}>4</Text>
          <Text style={styles.thinktitle}>
            İlgilendiğiniz alanda daha çok araştırın.{' '}
          </Text>
          <Text style={styles.thinkyazi}>
            Belki bu sizi ordan oraya götürecektir.{' '}
          </Text>
        </View>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('ThinkFivePage')}
        />
      </View>
    );
  }
}
export default ThinkFourPage;

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
    margin: 20,
  },
});
