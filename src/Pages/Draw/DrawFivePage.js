import React, {useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';
import CustomCanvas from '../../components/CustomCanvas';
import CustomImage from '../../components/Common/CustomImage';
import BackgroundColor from '../../components/Common/Background';
class DrawFivePage extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <ImageBackground source={Image1} style={{flex: 1}}>
            <View style={styles.writeContainer}>
              <Text style={styles.writetext}>5</Text>
              <Text style={styles.writetitle}>
                Rastgele bir şeyler karalamaya başla ! Belkide gerisi gelir...
              </Text>
            </View>
            <ButtonDevam
              image={require('../../assets/icons/right.png')}
              onPressHandler={() =>
                this.props.navigation.navigate('DrawSixPage')
              }
            />
          </ImageBackground>
        </View>
        <View style={{flex: 3}}>
          <CustomCanvas />
        </View>
      </SafeAreaView>
    );
  }
}
export default DrawFivePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    flex: 1,
  },
  writetitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 5,
    color: 'white',
  },

  writetext: {
    fontWeight: 'bold',
    color: 'white',
  },
  writeContainer: {
    margin: 10,
    padding: 5,
  },
});