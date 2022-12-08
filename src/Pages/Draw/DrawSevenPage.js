import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara8.jpg';
import {Dimensions} from 'react-native';
import Background from '../../components/Common/Background';
import MoodCard from '../../components/Card/MoodCard';
import axios from 'axios';

import ButtonDevam from '../../components/Common/ButtonDevam';

const DrawSevenPage = ({navigation}) => {
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

  const item4 = formData[3];

  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get('http://10.0.2.2:5001/api/v1/moods/uploadphoto/video')
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
      <View style={styles.writeContainer}>
        <Text style={styles.writetext}>7</Text>
        <Text style={styles.writetitle}>
          Özgür olun, daha da özgür... En özgür hissedeceğiniz hale bürünmeye
          çalışın
        </Text>
      </View>
      <Text style={styles.title2}>
        İşte sana ilham verebilecek ortamlarımız!
      </Text>
      <View style={styles.moodContainer}>
        <MoodCard
          id={item1._id}
          title={item1.title}
          content={item1.content}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item1.img[0]?.id,
          }}
        />
        <MoodCard
          id={item2._id}
          title={item2.title}
          content={item2.content}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item2.img[0]?.id,
          }}
        />
        <MoodCard
          id={item3._id}
          title={item3.title}
          content={item3.content}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item3.img[0]?.id,
          }}
        />
        <MoodCard
          id={item4._id}
          title={item4.title}
          content={item4.content}
          image={{
            uri: 'http://10.0.2.2:5001/api/v1/moods/image/' + item4.img[0]?.id,
          }}
        />
      </View>
      <ButtonDevam
        image={require('../../assets/icons/home.png')}
        onPressHandler={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

export default DrawSevenPage;

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
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title2: {
    marginLeft: 20,
    fontSize: 15,
    color: 'white',
    marginTop: 10,
  },
  writetext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  writeContainer: {
    margin: 20,
    paddingTop: 70,
  },
});
