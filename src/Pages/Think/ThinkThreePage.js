import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara17.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';

class ThinkThreePage extends React.Component {
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
          <Text style={styles.thinktext}>3</Text>
          <Text style={styles.thinktitle}>
            Yaratıcılığınızı öldüren kişilerden uzak durmanın kesinlikle faydası
            olacaktır.{' '}
          </Text>
          <Text style={styles.thinkyazi}>
            Önyargılarınızdan tamamiyle kurtulmalı ve ufkunuzu olabildiğince
            geniş tutmalısınız{' '}
          </Text>
          <Text style={styles.rastgele}>Seni düşünmeye yöneltecek sorular</Text>
          <View>
            <Text style={styles.soruText}> Soru 1</Text>
            <Text style={styles.soruText}> Soru 2</Text>
            <Text style={styles.soruText}> Soru 3</Text>
            <Text style={styles.soruText}> Soru 4</Text>
          </View>
        </View>

        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('ThinkFourPage')}
        />
      </View>
    );
  }
}
export default ThinkThreePage;

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
    fontSize: 15,
    color: 'white',
  },

  thinktext: {
    fontSize: 15,
    color: 'white',
  },
  thinkContainer: {
    margin: 25,
    paddingTop: 80,
    marginTop: 30,
  },
  thinkyazi: {
    marginLeft: 3,
    color: 'white',
    margin: 10,
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  soruText: {
    color: 'white',
    fontSize: 14,
    paddingTop: 40,
  },
});
