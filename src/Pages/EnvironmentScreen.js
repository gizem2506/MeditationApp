import React, {useEffect, useState} from 'react';
import Environment from '../components/Common/Environment';
import Video from 'react-native-video';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
function EnvironmentScreen() {
  const route = useRoute();
  const {id} = route.params;

  const [formData, setFormData] = React.useState(null);
  const getData = async () => {
    await axios
      .get(`http://10.0.2.2:5001/api/v1/moods/mood/${id}`)
      .then(response => {
        setFormData(response.data.data.mood);
        //console.log(id);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {formData != null && (
        <Environment
          video={{
            uri:
              'http://10.0.2.2:5001/api/v1/moods/image/' +
              formData?.video?.[0]?.id,
          }}
        />
      )}
    </View>
  );
}

export default EnvironmentScreen;
