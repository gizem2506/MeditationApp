import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image1 from '../../assets/manzara18.jpg';
import {Dimensions} from 'react-native';
import MoodCard from '../../components/Card/MoodCard';
import ButtonDevam from '../../components/Common/ButtonDevam';
import Background from '../../components/Common/Background';

const servistenGelenDatalar = [
  {
    title: 'Title 1',
    content: 'Content 1',
    image: require('../../assets/moodbg.jpeg'),
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    image: require('../../assets/manzara.png'),
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    image: require('../../assets/moodbg.jpeg'),
  },
  {
    title: 'Title 4',
    content: 'Content 4',
    image: require('../../assets/moodbg.jpeg'),
  },
];
class ThinkFivePage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image1}
            resizeMode="cover"
            alt="background">
            <Background />
          </ImageBackground>
        </View>
        <View style={styles.thinkContainer}>
          <Text style={styles.thinktext}>5</Text>
          <Text style={styles.thinktitle}>
            Zihninin boş olacağı bir ortamde düşünmek ister misin?
          </Text>
          <Text style={styles.thinkyazi}>
            İşte sana ilham verebilecek ortamlarımız!{' '}
          </Text>
        </View>
        <View style={styles.moodContainer}>
          {servistenGelenDatalar.map((item, index) => {
            return <MoodCard item={item} key={index} />;
          })}
        </View>
        <ButtonDevam
          image={require('../../assets/icons/right.png')}
          onPressHandler={() => this.props.navigation.navigate('ThinkSixPage')}
        />
      </View>
    );
  }
}
export default ThinkFivePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  thinktitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },

  thinktext: {
    fontSize: 15,
    color: 'white',
  },
  thinkContainer: {
    margin: 30,
    paddingTop: 40,
    marginTop: 30,
  },
  thinkyazi: {
    marginLeft: 3,
    color: 'white',
    margin: 20,
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
