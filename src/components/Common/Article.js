import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {CustomImage} from '../Common/CustomImage';

const Article = props => {
  const {title, content, image} = props;

  return (
    <View style={styles.container}>
      <CustomImage width={120} height={120} source={image} />
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
  
 
  container: {
    margin: 15,
  },
});
