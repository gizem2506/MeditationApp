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
import Background from '../../components/Common/Background';

class WriteSixPage extends React.Component {
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
            title={'Masa Lambası'}
            content={'Stephan King'}
            image={require('../../assets/obje4.jpg')}
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
          <ButtonDevam
            image={require('../../assets/icons/right.png')}
            onPressHandler={() =>
              this.props.navigation.navigate('DrawSevenPage')
            }
          />
        </View>
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
    paddingTop: 80,
    marginTop: 20,
  },
  articleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin:30,

  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 3,
    marginLeft: 18,
  },
});
