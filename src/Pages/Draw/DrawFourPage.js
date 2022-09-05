import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara4.jpeg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';
import RastgeleButton from '../../components/Common/RastgeleButton';
import Video from 'react-native-video';

class DrawFourPage extends React.Component {
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
        <View style={styles.genelContainer}>
          <Text style={styles.titleBir}>4</Text>
          <Text style={styles.titleİki}>
            Senin için seçtiğimiz müzikler belki ilham gelmesi için yardımcı
            olur.
          </Text>
          <View style={styles.rastgeleIcon}>
            <RastgeleButton image={require('../../assets/icons/refresh.png')} />
            <Text style={styles.rastgele}>Rastgele müzik öner</Text>
          </View>

          <Video
            source={require('../../../big_buck_bunny.mp4')} // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
          />

       

          <ButtonDevam
            image={require('../../assets/icons/right.png')}
            onPressHandler={() =>
              this.props.navigation.navigate('DrawFivePage')
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default DrawFourPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  backgroundVideo: {
    width: 350,
    height: 200,
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
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  rastgeleIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 18,
  },
});
