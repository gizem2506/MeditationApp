import React, {useState, useEffect} from 'react';
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
import Background from '../Common/Background';
import ButtonDevam from '../Common/ButtonDevam';
import axios from 'axios';
const baseUrl = 'http://localhost:5001/api/v1/moods/uploadphoto';
const {width, height} = Dimensions.get('window');

const publicURL = 'http://10.0.0.1';

const MoodScreen = ({navigation}) => {
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

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(`http://192.168.1.34:5001/api/v1/moods/uploadphoto/video`)
      .then(response => {
        setFormData(response.data.data.moods);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.moodContainer}>
        <ScrollView>
          {formData.map(data => (
            <MoodCard
              title={data.title}
              content={data.content}
              id={data._id}
              image={
                'http://192.168.43.124:5001/api/v1/moods/image/' +
                data.img[0]?.id
              }
            />
          ))}
        </ScrollView>
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
