import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara19.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import {CustomImage} from '../../components/Common/CustomImage';
import Book from '../../components/Common/Book';
import Challange from '../../components/Common/Challenge';
import Background from '../../components/Common/Background';
import RastgeleButton from '../../components/Common/RastgeleButton';
import axios from 'axios';

const DrawSecondPage = ({navigation}) => {
  const [loading, setLoading] = useState('false');

  const [formData, setFormData] = React.useState([
    {
      title: '',
      category: 'draw2',
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
      .get('http://10.0.2.2:5001/api/v1/moods/uploadphoto/draw2')
      .then(response => {
        setFormData(response.data.data.moods);
        console.log(response.data.data.moods);
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
          Challange'ler sizi motive edecek en güzel yöntemdir.Çizmeyle alakalı
          challange önerileri:
        </Text>
        <View style={styles.rastgeleIcon}>
          <RastgeleButton image={require('../../assets/icons/refresh.png')} />
          <Text style={styles.rastgele}>Rastgele challange öner</Text>
        </View>
      </View>
      <View style={styles.challangeContainer}>
        <Challange
          image={{
            uri:
              'http://10.0.2.2:5001/api/v1/moods/image/' +
              formData[Math.floor(Math.random() * formData.length)].img[0]?.id,
          }}
        />
        <Challange
          image={{
            uri:
              'http://10.0.2.2:5001/api/v1/moods/image/' +
              formData[Math.floor(Math.random() * formData.length)].img[0]?.id,
          }}
        />
      </View>

      <ButtonDevam
        image={require('../../assets/icons/right.png')}
        onPressHandler={() => navigation.navigate('DrawThreePage')}
      />
    </View>
  );
};

export default DrawSecondPage;

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
    marginTop: 120,
  },
  textİki: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 9,
  },
  textContainer: {
    margin: 20,
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
  challangeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingLeft: 18,
  },
});
