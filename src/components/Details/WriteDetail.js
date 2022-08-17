import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import {CustomImage} from '../Common/CustomImage';

const {width, height} = Dimensions.get('window');
const WriteDetail = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagecontainer}
          source={Image}
          resizeMode="stretch"
          alt="background"></ImageBackground>
      </View>
      <View>
        <View style={styles.bodyContainer}>
          <Text style={styles.text1}>1</Text>
          <Text style={styles.title1}>
            "Şu an" yazmaya başlamak için en iyi andır!
          </Text>
        </View>
        <Text style={styles.title2}>Daha iyisini beklemeyin.</Text>
        <CustomImage
          onPress={() => navigation.navigate('Home')}
          style={styles.customımage}
          width={50}
          height={50}
          source={'https://img.icons8.com/color-glass/344/circled-right.png'}
          isUri
        />
      </View>
    </SafeAreaView>
  );
};

export default WriteDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagecontainer: {
    height: height,
    width: width,
  },
  customımage: {
    marginHorizontal: 20,
    marginVertical:40,
    alignSelf: 'flex-end',
  },
  text1: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    fontSize: 50,
  },
  title1: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    marginTop: 50,
  },
  title2: {
    marginLeft: 5,
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
});
