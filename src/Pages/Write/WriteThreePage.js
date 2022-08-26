import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara4.jpeg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Kelimeler from '../../components/Common/Kelimeler';
import Background from '../../components/Common/Background';
import RastgeleButton from '../../components/Common/RastgeleButton';
class WriteThreePage extends React.Component {
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
        <View style={styles.genelContainer}>
          <Text style={styles.titleBir}>3</Text>
          <Text style={styles.titleİki}>
            Hata yapmaktan korkma, en saçma fikirler sana ilham olabilir ve
            harikalar yaratabilirsin. Hemingway’in de dediği gibi, sarhoşken
            yazın, ayıkken düzeltin.
          </Text>
          <Text style={styles.titletext}>
            İlham gelmesi için rastgele kelimeler üretelim dedik!
          </Text>
          <View style={styles.rastgeleIcon}>
            <RastgeleButton image={require('../../assets/icons/refresh.png')} />
            <Text style={styles.rastgele}>Rastgele konu üret</Text>
          </View>
          <View style={styles.loremContainer}>
            <Kelimeler />
          </View>
          <ButtonDevam
            image={require('../../assets/icons/right.png')}
            onPressHandler={() =>
              this.props.navigation.navigate('WriteFourPage')
            }
          />
        </View>
      </View>
    );
  }
}

export default WriteThreePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rastgeleIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop:8,

  },
  title: {
    fontSize: 32,
  },
  imageContainer: {
    height: height,
    width: width,
  },
  
  titleBir: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
    marginTop: 85,
  },
  titleİki: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  genelContainer: {
    borderRadius: 20,
    margin: 10,
    padding: 15,
  },
  titletext: {
    paddingTop: 20,
    color: '#E0D1FF',
  },
  loremContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 7,
    
  },
});
