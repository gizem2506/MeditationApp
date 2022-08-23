import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara2.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';

class ThinkFirstPage extends React.Component {
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
        <View style={styles.textContainer}>
          <Text style={styles.textBir}>1 </Text>
          <Text style={styles.textİki}>
            Fikir bulmak için önce sorun bulmalıyız!{' '}
          </Text>
          <Text style={styles.writeyazi}>
            Unutma, gününe devam ederken aklına gelen her şeyi not almalısın
          </Text>
          <Text style={styles.rastgele}>Rastgele konu üret</Text>
          <View style={styles.genelContainer}>
            <Text style={styles.textgenel}>Konu 1 </Text>
            <Text style={styles.textözel}>
              Konu 1 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır
              şeklinde olacaktır{' '}
            </Text>
            <View>
              <Text style={styles.textgenel}>Konu 2 </Text>
              <Text style={styles.textözel}>
                Konu 2 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır
                şeklinde olacaktır{' '}
              </Text>
            </View>
            <View>
              <Text style={styles.textgenel}>Konu 3 </Text>
              <Text style={styles.textözel}>
                Konu 3 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır
                şeklinde olacaktır{' '}
              </Text>
            </View>
            <View>
              <Text style={styles.textgenel}>Konu 4 </Text>
              <Text style={styles.textözel}>
                Konu 4 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır
                şeklinde olacaktır{' '}
              </Text>
            </View>
          </View>

          <ButtonDevam
            image={require('../../assets/icons/right.png')}
            onPressHandler={() =>
              this.props.navigation.navigate('ThinkSecondPage')
            }
          />
        </View>
      </View>
    );
  }
}
export default ThinkFirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  textBir: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 80,
  },
  textİki: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  textContainer: {
    margin: 10,
    padding: 10,
  },
  genelContainer: {
    marginTop: 10,
  },
  writeyazi: {
    marginLeft: 4,
    color: 'white',
    margin: 10,
  },
  textgenel: {
    fontSize: 20,
    color: 'white',
    margin: 5,
  },
  textözel: {
    color: '#E0D1FF',
    margin: 5,
  },
  rastgele: {
    color: '#56E1FF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
