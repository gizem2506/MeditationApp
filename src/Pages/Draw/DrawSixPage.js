import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara3.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Article from '../../components/Common/Article';

class WriteSixPage extends React.Component {
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
        <View style={styles.writeContainer}>
          <Text style={styles.writetext}>6</Text>
          <Text style={styles.writetitle}>Rastgele objeler öner</Text>
        </View>
        <Text style={styles.rastgele}>Rastgele obje öner</Text>

        <View style={styles.articleContainer}>
          <Article
            title={'Dondurma Külahı'}
            content={'Stephan King'}
            image={require('../../assets/obje.jpg')}
          />

          <Article
            title={'Kaktüs'}
            content={'Stephan King'}
            image={require('../../assets/obje2.jpg')}
          />

          <Article
            title={'Rubik Küp'}
            content={'Stephan King'}
            image={require('../../assets/obje3.jpg')}
          />

          <Article
            title={'Masa Lambası'}
            content={'Stephan King'}
            image={require('../../assets/obje4.jpg')}
          />
        </View>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('DrawSevenPage')}
        />
      </View>
    );
  }
}
export default WriteSixPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  writetitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 8,
    color: 'white',
  },

  writetext: {
    fontWeight: 'bold',
    color: 'white',
  },
  writeContainer: {
    margin: 20,
    paddingTop: 100,
    marginTop: 90,
  },
  articleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin:10,
    padding:25
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft:18
  },
});
