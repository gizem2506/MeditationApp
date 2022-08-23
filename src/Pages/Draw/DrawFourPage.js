import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {WebView} from 'react-native-webview';

const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara4.jpeg';
import Kitap1 from '../../assets/yazmasanati.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';

class DrawFivePage extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image1}
            resizeMode="cover"
            alt="background">
            <Background />
          </ImageBackground>
        </View>
        <WebView
          source={{
            html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          }}
          style={{marginTop: 20}}
        />
        <View style={styles.genelContainer}>
          <Text style={styles.titleBir}>4</Text>
          <Text style={styles.titleİki}>
            Senin için seçtiğimiz müzikler belki ilham gelmesi için yardımcı
            olur.
          </Text>
          <Text style={styles.rastgele}>Rastgele müzik öner</Text>
        </View>

        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('DrawFivePage')}
        />
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
    height: height,
    width: width,
  },

  titleBir: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 15,
  },
  titleİki: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  genelContainer: {
    borderRadius: 20,
    margin: 5,
    padding: 15,
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
});
