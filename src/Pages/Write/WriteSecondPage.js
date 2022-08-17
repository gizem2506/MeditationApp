import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
class WriteSecondPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagecontainer}
          source={Image}
          resizeMode="stretch"
          alt="background"></ImageBackground>
      </View>
    );
  }
}

export default WriteSecondPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagecontainer: {
    height: height,
    width: width,
  },
});
