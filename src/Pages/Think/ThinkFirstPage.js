import React, {useState, useEffect} from 'react';
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
import RastgeleButton from '../../components/Common/RastgeleButton';

import axios from 'axios';

const ThinkFirstPage = ({navigation}) => {
  const [loading, setLoading] = useState('false');

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
      .get('http://10.0.2.2:5001/api/v1/moods/uploadphoto/think1')
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
        <Text style={styles.textBir}>1 </Text>
        <Text style={styles.textİki}>
          Fikir bulmak için önce sorun bulmalıyız!{' '}
        </Text>
        <Text style={styles.writeyazi}>
          Unutma, gününe devam ederken aklına gelen her şeyi not almalısın
        </Text>
        <View style={styles.rastgeleIcon}>
          <RastgeleButton image={require('../../assets/icons/refresh.png')} />
          <Text style={styles.rastgele}>Rastgele konu üret</Text>
        </View>
          <View style={styles.genelContainer}>
            <View>
              <Text style={styles.textgenel}>{item1.title}</Text>
              <Text style={styles.textözel}>{item1.content}</Text>
              <View>
                <Text style={styles.textgenel}>{item2.title} </Text>
                <Text style={styles.textözel}>{item2.content}</Text>
              </View>
              <View>
                <Text style={styles.textgenel}>{item3.title}</Text>
                <Text style={styles.textözel}>{item3.content}</Text>
              </View>
              <View>
                <Text style={styles.textgenel}>{item4.title} </Text>
                <Text style={styles.textözel}>{item4.content}</Text>
              </View>
            </View>
          </View>
      
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => navigation.navigate('ThinkSecondPage')}
        />
      </View>
    </View>
  );
};

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
    fontSize: 15,
    color: 'white',
    paddingTop: 15,
  },
  textözel: {
    color: '#E0D1FF',
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
