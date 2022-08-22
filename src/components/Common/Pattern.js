import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomImage} from '../Common/CustomImage';

const Pattern = props => {
  const {image} = props;

  return (
    <View>
      <CustomImage
        style={styles.customImg}
        width={140}
        height={170}
        source={image}
      />
    </View>
  );
};

export default Pattern;

const styles = StyleSheet.create({
  customImg: {
    margin: 8,
  },
});
