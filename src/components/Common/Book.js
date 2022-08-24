import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {CustomImage} from '../Common/CustomImage';

const Book = props => {
  const {title, content, image} = props;

  return (
    <View style={styles.kitapContainer}>
      <CustomImage width={130} height={140} source={image} resizeMode="cover" />
      <View style={styles.bookkContainer}>
        <Title style={styles.bookTitle}> {title}</Title>
        <Paragraph style={styles.bookParagraph}> {content}</Paragraph>
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  bookTitle: {
    fontSize: 15,
    color: 'white',
  },
  bookParagraph: {
    fontSize: 12,
    color: 'white',
  },
  kitapContainer: {
    margin: 10,
  },
  bookkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
});
