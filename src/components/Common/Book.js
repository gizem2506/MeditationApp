import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {CustomImage} from '../Common/CustomImage';

const Book = props => {
  const {title, content, image} = props;

  return (
    <View>
      <CustomImage
        width={130}
        height={160}
        source={image}
      />
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
  bookkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 5,
  },
});
