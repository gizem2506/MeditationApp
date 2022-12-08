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
const {width, height} = Dimensions.get('window');

const MoodScreen = ({navigation, isUri}) => {
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
      .get(`http://10.0.2.2:5001/api/v1/moods/uploadphoto/video`)
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
        {formData.map(data => (
          <MoodCard
            title={data.title}
            content={data.content}
            id={data._id}
            isUri={true}
            image={'http://10.0.2.2:5001/api/v1/moods/image/' + data.img[0]?.id}
          />
        ))}
        {/* <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => navigation.navigate('ThinkSixPage')}
        /> */}
      </View>
    </View>
  );
};

export default MoodScreen;

const styles = StyleSheet.create({
  moodContainer: {
    position: 'absolute',
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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
