import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomImage} from '../Common/CustomImage';

const Challange = props => {
  const {image} = props;

  return (
    <View>
      <CustomImage
        style={styles.customImg}
        width={140}
        height={160}
        source={image}
      />
    </View>
  );
};

export default Challange;

const styles = StyleSheet.create({
  customImg: {
    margin: 20,
  },
});