import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {CustomImage} from '../Common/CustomImage';

const Moods = props => {
  const {title, content, image} = props;

  return (
    <View>
      <CustomImage width={130} height={130} source={image} />
      <View style={styles.moodsContainer}>
        <Title style={styles.moodsTitle}> {title}</Title>
        <Paragraph style={styles.moodsParagraph}> {content}</Paragraph>
      </View>
    </View>
  );
};

export default Moods;
const styles = StyleSheet.create({
  moodsTitle: {
    fontSize: 15,
    color: 'white',
  },
  moodsParagraph: {
    fontSize: 12,
    color: 'white',
  },
  moodsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
