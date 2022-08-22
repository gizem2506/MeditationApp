import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {CustomImage} from '../Common/CustomImage';

const Article = props => {
  const {title, content, image} = props;

  return (
    <View>
      <CustomImage width={90} height={90} source={image} />
      <View style={styles.articleContainer}>
        <Title style={styles.articleTitle}> {title}</Title>
        <Paragraph style={styles.articleParagraph}> {content}</Paragraph>
      </View>
    </View>
  );
};

export default Article;
const styles = StyleSheet.create({
  articleTitle: {
    fontSize: 15,
    color: 'white',
   
  },
  articleParagraph: {
    fontSize: 12,
    color: 'white',
  },
  articleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
