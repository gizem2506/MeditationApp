import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara20.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';

class ThinkSixPage extends React.Component {
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
          <Text style={styles.thinktext}>6</Text>
          <Text style={styles.thinktitle}>
            Bulduğunuz fikrin pazardaki rakiplerini, olası müşterileri ve olan
            ürünlerin eksikliklerini inceleyin.
          </Text>
          <Text style={styles.thinkyazi}>
            Eğer fikir bulduysanız çözümlerini adım adım zihin haritasına
            yazmayı unutmayın.
          </Text>
        </View>
        <ButtonDevam
          image={require('../../assets/icons/home.png')}
          onPressHandler={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
export default ThinkSixPage;

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
    fontSize: 20,
    color: 'white',
  },

  thinktext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  thinkContainer: {
    margin: 20,
    paddingTop: 160,
    marginTop: 90,
  },
  thinkyazi: {
    marginLeft: 5,
    color: 'white',
    margin: 15,
  },
});
