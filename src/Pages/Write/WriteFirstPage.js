import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Button,
} from 'react-native';
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import {CustomImage} from '../Common/CustomImage';

const {width, height} = Dimensions.get('window');

class WriteFirstPage extends Component {
  render() {
    return (
      <View>
        <Pressable
          onPress={() => this.props.navigation.navigate('WriteSecondPage')}>
          <Text style={styles.text1}>1</Text>
        </Pressable>
        <Text style={styles.title1}>
          "Şu an" yazmaya başlamak için en iyi andır!
        </Text>

        <Text style={styles.title2}>Daha iyisini beklemeyin.</Text>
      </View>
    );
  }
}

export default WriteFirstPage;

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
    marginVertical: 40,
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
