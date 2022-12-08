import React, {useState, useEffect} from 'react';
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
import RastgeleButton from '../../components/Common/RastgeleButton';

import axios from 'axios';

const DrawSixPage = ({navigation}) => {
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

  const item3 = formData[2];

  const item4 =formData[3];

  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get('http://10.0.2.2:5001/api/v1/moods/uploadphoto/draw6')
      .then(response => {
        let data = response.data.data.moods;
        let newArr = [];
        while (newArr.length != 4) {
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
      <View style={styles.writeContainer}>
        <Text style={styles.writetext}>6</Text>
        <Text style={styles.writetitle}>Rastgele objeler öner</Text>
      </View>
      <View style={styles.rastgeleIcon}>
        <RastgeleButton image={require('../../assets/icons/refresh.png')} />
        <Text style={styles.rastgele}>Rastgele obje öner</Text>
      </View>
      <View style={styles.articleContainer}>
        <Article
          title={item1.title}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item1.img[0]?.id,
          }}
        />
        <Article
          title={item2.title}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item2.img[0]?.id,
          }}
        />
        <Article
          title={item3.title}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item3.img[0]?.id,
          }}
        />
        <Article
          title={item4.title}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item4.img[0]?.id,
          }}
        />
      </View>

      <ButtonDevam
        image={require('../../assets/icons/right.png')}
        onPressHandler={() => navigation.navigate('DrawSevenPage')}
      />
    </View>
  );
};

export default DrawSixPage;

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
    fontSize: 20,
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
    margin: 30,
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
    marginLeft: 19,
  },
});
