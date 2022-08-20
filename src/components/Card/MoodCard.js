import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {CustomImage} from '../Common/CustomImage';

const MoodCard = props => {
  const [isClicked, setisClicked] = useState(false);

  const {onMoodDetailPressed, item} = props;

  const {title, content, image} = item;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setisClicked(!isClicked)}>
      {isClicked ? (
        <CustomImage
          style={styles.customImg}
          width={140}
          height={170}
          source={image}
          isUri={false}
        />
      ) : (
        <View>
          <Title style={styles.moodTitle}> {title}</Title>
          <Paragraph> {content}</Paragraph>
          <TouchableOpacity
            onPress={onMoodDetailPressed}
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
  customImg: {
  },
  touchableButton: {
    backgroundColor: '#6320EE',
    borderRadius: 20,
    margin: 20,
    marginTop: 55,
  },
  moodTitle: {
    fontSize: 18,
  },
  moodText: {
    textAlign: 'center',
    color: 'white',
  },
});
