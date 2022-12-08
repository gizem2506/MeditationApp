import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara16.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Kelimeler from '../../components/Common/Kelimeler';
import Pattern from '../../components/Common/Pattern';
import Background from '../../components/Common/Background';
import RastgeleButton from '../../components/Common/RastgeleButton';
import axios from 'axios';

const DrawThreePage = ({navigation}) => {
  const [loading, setLoading] = useState('false');

  const [formData, setFormData] = React.useState([
    {
      title: '',
      category: '',
      content: '',
      img: [],
      video: [],
      audio: [],
    },
    {
      title: '',
      category: '',
      content: '',
      img: [],
      video: [],
      audio: [],
    },
  ]);
  const item1 = formData[0];
  const item2 = formData[1];

  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get('http://10.0.2.2:5001/api/v1/moods/uploadphoto/draw6')
      .then(response => {
        let data = response.data.data.moods;
        let newArr = [];
        while (newArr.length != 2) {
          let r = Math.floor(Math.random() * data.length);
          newArr.push(data[r]);
          data.splice(r, 1);
        }
        setFormData(newArr);
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
      <View style={styles.genelContainer}>
        <Text style={styles.titleBir}>3</Text>
        <Text style={styles.titleİki}>
          Aşağıdaki desenler sana ilham verebilir:
        </Text>
        <View style={styles.rastgeleIcon}>
          <RastgeleButton image={require('../../assets/icons/refresh.png')} />
          <Text style={styles.rastgele}>Rastgele desen öner</Text>
        </View>
        <View style={styles.patternContainer}>
          <Pattern
            image={{
              uri:
                'http://10.0.2.2:5001/api/v1/moods/image/' +
                item1.img[0]?.id,
            }}
          />

          <Pattern
            image={{
              uri:
                'http://10.0.2.2:5001/api/v1/moods/image/' +
                item2.img[0]?.id,
            }}
          />
        </View>

        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => navigation.navigate('DrawFourPage')}
        />
      </View>
    </View>
  );
};

export default DrawThreePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
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
  titleBir: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 100,
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
  patternContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 45,
  },
});
