import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara18.jpg';
import {Dimensions} from 'react-native';
import MoodCard from '../../components/Card/MoodCard';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';
import axios from 'axios';

const ThinkFivePage = ({navigation}) => {
  const [formData, setFormData] = React.useState([
    {
      title: '',
      category: '',
      content: '',
      img: [],
      video: [],
      audio: [],
    },
  ]);
  var item1 = formData[Math.floor(Math.random() * formData.length)];
  var item2 = formData[Math.floor(Math.random() * formData.length)];
  var item3 = formData[Math.floor(Math.random() * formData.length)];
  var item4 = formData[Math.floor(Math.random() * formData.length)];
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(`http://10.0.2.2:5001/api/v1/moods/uploadphoto/video`)
      .then(response => {
        setFormData(response.data.data.moods);
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
        <Text style={styles.thinktext}>5</Text>
        <Text style={styles.thinktitle}>
          Zihninin boş olacağı bir ortamde düşünmek ister misin?
        </Text>
        <Text style={styles.thinkyazi}>
          İşte sana ilham verebilecek ortamlarımız!{' '}
        </Text>
      </View>
        <View style={styles.moodContainer}>
          <MoodCard
            id={item1._id}
            title={item1.title}
            content={item1.content}
            image={{
              uri:
                'http://10.0.2.2:5001/api/v1/moods/image/' + item1.img[0]?.id,
            }}
          />
          <MoodCard
            id={item2._id}
            title={item2.title}
            content={item2.content}
            image={{
              uri:
                'http://10.0.2.2:5001/api/v1/moods/image/' + item2.img[0]?.id,
            }}
          />
          <MoodCard
            id={item3._id}
            title={item3.title}
            content={item3.content}
            image={{
              uri:
                'http://10.0.2.2:5001/api/v1/moods/image/' + item3.img[0]?.id,
            }}
          />
          <MoodCard
            id={item4._id}
            title={item4.title}
            content={item4.content}
            image={{
              uri:
                'http://10.0.2.2:5001/api/v1/moods/image/' + item4.img[0]?.id,
            }}
          />
        </View>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => navigation.navigate('ThinkSixPage')}
        />
    </View>
  );
};

export default ThinkFivePage;

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
    fontSize: 15,
    color: 'white',
  },
  thinkContainer: {
    margin: 30,
    paddingTop: 40,
    marginTop: 30,
  },
  thinkyazi: {
    marginLeft: 3,
    color: 'white',
    margin: 20,
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
