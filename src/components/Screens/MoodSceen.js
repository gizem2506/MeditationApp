import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Image1 from '../../assets/moodbg.jpeg';
import {Dimensions} from 'react-native';
import MoodCard from '../Card/MoodCard';
import Background from '../../components/Common/Background';
import ButtonDevam from '../../components/Common/ButtonDevam';

const {width, height} = Dimensions.get('window');

const MoodScreen = ({navigation}) => {
  {
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
    const img = formData?.img?.[0];
    console.log(img);

    React.useEffect(() => {
      getData();
    }, []);
    const getData = async () => {
      await axios
        .get(`http://10.0.2.2:5001/api/v1/moods/uploadphoto/video`)
        .then(response => {
          setFormData(response.data.data.mood);
          console.log(id);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagecontainer}
        source={Image1}
        resizeMode="cover"
        alt="background"></ImageBackground>

      <Background />
      <View style={styles.moodContainer}>
        {formData.map(data => (
          <MoodCard
            title={data.title}
            content={data.content}
            id={data._id}
            image={'http://10.0.2.2:5001/api/v1/moods/image/' + data.img[0]?.id}
          />
        ))}

        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default MoodScreen;

const styles = StyleSheet.create({
  moodContainer: {
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  blurContainer: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  moodText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    margin: 20,
  },
});
