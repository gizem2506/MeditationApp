import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara17.jpg';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';
import RastgeleButton from '../../components/Common/RastgeleButton';
import axios from 'axios';

const ThinkThreePage = ({navigation}) => {
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
      .get('http://10.0.2.2:5001/api/v1/moods/uploadphoto/think3')
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
      <View style={styles.thinkContainer}>
        <Text style={styles.thinktext}>3</Text>
        <Text style={styles.thinktitle}>
          Yaratıcılığınızı öldüren kişilerden uzak durmanın kesinlikle faydası
          olacaktır.{' '}
        </Text>
        <Text style={styles.thinkyazi}>
          Önyargılarınızdan tamamiyle kurtulmalı ve ufkunuzu olabildiğince geniş
          tutmalısınız{' '}
        </Text>
        <View style={styles.rastgeleIcon}>
          <RastgeleButton image={require('../../assets/icons/refresh.png')} />
          <Text style={styles.rastgele}>Seni düşünmeye yöneltecek sorular</Text>
        </View>
          <View style={styles.soruContainer}>
            <Text style={styles.soruText}>{item1.title}</Text>
            <Text style={styles.soruText}>{item2.title}</Text>
            <Text style={styles.soruText}>{item3.title}</Text>
            <Text style={styles.soruText}>{item4.title}</Text>
          </View>
    
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => navigation.navigate('ThinkFourPage')}
        />
      </View>
    </View>
  );
};

export default ThinkThreePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  thinktitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },

  thinktext: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  thinkContainer: {
    margin: 25,
    paddingTop: 50,
  },
  thinkyazi: {
    marginLeft: 3,
    color: 'white',
    margin: 10,
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
  soruText: {
    color: 'white',
    fontSize: 14,
    paddingTop: 40,
  },
});
