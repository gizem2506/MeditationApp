import React from 'react';
import Environment from '../components/Common/Environment';
//import {Video} from 'expo-av';
//import VideoPlayer from 'expo-video-player';

import axios from 'axios';
import {useLocation} from 'react-router-dom';

function EnvironmentScreen() {
  const {state} = useLocation();
  const {id} = state;
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
      .get(`http://10.0.2.2:5001/api/v1/moods/mood/${id}`)
      .then(response => {
        setFormData(response.data.data.mood);
        console.log(id);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <View>
      {/* <VideoPlayer
        video={{
          uri:
            'http://10.0.2.2:5001/api/v1/moods/image/' +
            formData?.video?.[0]?.id,
        }}
      /> */}
    </View>
  );
}

export default EnvironmentScreen;
