import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';
import RastgeleButton from '../../components/Common/RastgeleButton';
import axios from 'axios';

const WriteSecondPage = ({navigation}) => {
  const [formData, setFormData] = React.useState([
    {
      title: '',
      category: 'write2',
      content: '',
      img: [],
    },
  ]);
  const item1 = formData[Math.floor(Math.random() * formData.length)];
  const item2 = formData[Math.floor(Math.random() * formData.length)];

  const item3 = formData[Math.floor(Math.random() * formData.length)];

  const item4 = formData[Math.floor(Math.random() * formData.length)];

  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get('http://10.0.2.2:5001/api/v1/moods/uploadphoto')
      .then(response => {
        setFormData(response.data.data.moods);
        //console.log(response.data.data.moods);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

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
        <Text style={styles.textBir}>2 </Text>
        <Text style={styles.textİki}>
          Yazmaya başlamadan önce zihninizi boşaltmalısınız.
        </Text>
        <Text style={styles.textİki}>Yazılımını güncellemek için ; </Text>
        <Text style={styles.textDetail}>Kitap oku </Text>
        <Text style={styles.textDetail}>Podcast dinle </Text>
        <Text style={styles.textDetail}>Deneyime açık ol</Text>

        <Text style={styles.textİki}>Diskini temiz tutmak için ; </Text>
        <Text style={styles.textDetail}>Meditasyon yap </Text>
        <Text style={styles.textDetail}>Günlük tut </Text>
        <Text style={styles.textDetail}>kendini dinle</Text>

        <Text style={styles.textİki}>Pilini korumak için ; </Text>
        <Text style={styles.textDetail}>8 saat uyu </Text>
        <Text style={styles.textDetail}>Doğaya sarıl</Text>
        <Text style={styles.textDetail}>Ditijal detoks yap</Text>
      </View>

      <ButtonDevam
        image={require('../../assets/icons/right.png')}
        onPressHandler={() => navigation.navigate('WriteThreePage')}
      />
    </View>
  );
};

export default WriteSecondPage;

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
    marginTop: 20,
  },
  textİki: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginLeft: 0,

    margin: 6,
  },
  textDetail: {
    marginTop: 10,
    marginLeft: 0,
  },
  textContainer: {
    margin: 10,
    padding: 15,
  },
  genelContainer: {
    marginTop: 10,
  },
  textgenel: {
    fontSize: 20,
    color: 'white',
    margin: 6,
    marginLeft: 0,
  },
  textözel: {
    color: '#E0D1FF',
    margin: 5,
    marginLeft: 0,
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
    marginTop: 7,
  },
});
