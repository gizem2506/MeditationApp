import {CustomImage} from './CustomImage';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreenButton = props => {
  const {text, image, onPressHandler, bgColor, isImageUri, textColor} = props;
  return (
    <View style={styles.moodContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: bgColor ? bgColor : '#ffffff'},
        ]}
        onPress={onPressHandler}>
        <CustomImage
          style={styles.customImage}
          width={20}
          height={20}
          source={image}
          isUri={isImageUri}
        />
        <Text
          style={[
            styles.buttonText,
            {color: textColor ? textColor : '#6320EE'},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenButton;

const styles = StyleSheet.create({
  button: {
    borderStyle: 'solid',
    borderColor: '#6320EE',
    borderRadius: 10,
    borderWidth: 2,
    fontWeight: 'bold',
    padding: 6,
    margin: 5,
    paddingHorizontal: 90,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  customImage: {marginRight: 10},
  buttonText: {
    fontWeight: 'bold',
    color: '#6320EE',
    textAlign: 'center',
  },
});
