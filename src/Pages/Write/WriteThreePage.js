import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Kelimeler from '../../components/Common/Kelimeler';
class WriteThreePage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image}
            resizeMode="stretch"
            alt="background"></ImageBackground>
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
          <Text style={styles.rastgele}>Rastgele konu üret</Text>
          <View style={styles.loremContainer}>
            <Kelimeler />
          </View>
          <ButtonDevam
            image={require('../../assets/icons/right.png')}
            onPressHandler={() =>
              this.props.navigation.navigate('WriteThreePage')
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

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  imageContainer: {
    height: height,
    width: width,
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  titleBir: {
    fontWeight: 'bold',
    color: '#E0D1FF',
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
    margin: 20,
    padding: 20,
  },
  titletext: {
    paddingTop: 20,
    color: '#E0D1FF',
  },
  loremContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
  },
});
