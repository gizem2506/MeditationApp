import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara14.jpg';
import Kitap1 from '../../assets/yazmasanati.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Book from '../../components/Common/Book';
import {CustomImage} from '../../components/Common/CustomImage';
import {ScrollView} from 'react-native-gesture-handler';
import Background from '../../components/Common/Background';
import RastgeleButton from '../../components/Common/RastgeleButton';
import axios from 'axios';

const WriteFourPage = ({navigation}) => {
  const [formData, setFormData] = React.useState([
    {
      title: '',
      category: '',
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
      .get('http://10.0.2.2:5001/api/v1/moods/uploadphoto/write4')
      .then(response => {
        setFormData(response.data.data.moods);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

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
          Çok okumak, daha güzel yazmak için bir yoldur. Eğer ilhamınızın kapalı
          olduğunu düşünüyorsanız yazmayı bırakın ve okumaya başlayın.
        </Text>
        <View style={styles.rastgeleIcon}>
          <RastgeleButton image={require('../../assets/icons/refresh.png')} />
          <Text style={styles.rastgele}>Rastgele kitap öner</Text>
        </View>
      </View>
      <View style={styles.bookContainer}>
        <Book
          title={item1.title}
          content={item1.content}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item1.img[0]?.id,
          }}
        />
        <Book
          title={item2.title}
          content={item2.content}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item2.img[0]?.id,
          }}
        />
        <Book
          title={item3.title}
          content={item3.content}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item3.img[0]?.id,
          }}
        />
        <Book
          title={item4.title}
          content={item4.content}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item4.img[0]?.id,
          }}
        />
      </View>

      <ButtonDevam
        image={require('../../assets/icons/right.png')}
        onPressHandler={() => navigation.navigate('WriteFivePage')}
      />
    </SafeAreaView>
  );
};

export default WriteFourPage;

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
    fontSize: 18,
    marginTop: 9,
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
    margin: 8,
    padding: 10,
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

  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 5,
  },
});
