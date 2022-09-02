import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {CustomImage} from '../Common/CustomImage';

const MoodCard = props => {
  const [isClicked, setisClicked] = useState(false);


  const {title, content, image} = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setisClicked(!isClicked)}>
      {!isClicked ? (
        <CustomImage
          style={styles.customImg}
          width={140}
          height={170}
          source={image}
          resizeMode={'cover'}
          isUri={false}
        />
      ) : (
        <View>
          <Title style={styles.moodTitle}> {title}</Title>
          <Text style={styles.moodsText}> {content}</Text>
          <TouchableOpacity
            onPress={null}
            style={styles.touchableButton}>
            <Title style={styles.moodText}>MOOD</Title>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MoodCard;

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 170,
    margin: 14,
    backgroundColor: 'white',
  },

  touchableButton: {
    backgroundColor: '#6320EE',
    borderRadius: 20,
    margin: 15,
    marginTop: 5,
  },
  moodsText: {
    padding: 5,
  },
  moodTitle: {
    fontSize: 18,
    margin: 5,
  },
  moodText: {
    textAlign: 'center',
    color: 'white',
  },
});