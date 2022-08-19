import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TouchableOpacity,
} from 'react-native-paper';
import CustomImage from './components/CustomImage';
const MoodCard = props => {
  const [isClicked, setisClicked] = useState();
  const {title, content, image, onPressHandler} = props;

  return (
    <View>
      <TouchableOpacity
        style={[styles.button]}
        onPress={onPressHandler}></TouchableOpacity>
      <Card>
        {isClicked ? (
          <View>
            <CustomImage
              style={styles.customImage}
              width={20}
              height={20}
              source={image}
            />
            source={image}
          </View>
        ) : (
          <View>
            <Title> {title}</Title>
            <Paragraph> {content}</Paragraph>
          </View>
        )}
      </Card>
    </View>
  );
};

export default MoodCard;
