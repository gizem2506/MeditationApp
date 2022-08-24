import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Image1 from '../../assets/manzara9.jpg';
import {Dimensions} from 'react-native';
import Background from '../../components/Common/Background';
const {width, height} = Dimensions.get('window');
const ComposeFirstPage = ({navigation}) => {
  const [userName, setUsername] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagecontainer}
          source={Image1}
          resizeMode="cover"
          alt="background">
          <Background />
        </ImageBackground>
      </View>
      <Text style={styles.chatext}>Chat ! </Text>
      <View style={styles.ınputt}>
        <TextInput
          style={styles.textInput}
          onChangeText={setUsername}
          value={userName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('ComposeSecondPage', {userName: userName})
          }>
          <Text style={styles.chatButton}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ComposeFirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 230,
    marginLeft: 10,
  },
  imagecontainer: {
    height: height,
    width: width,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    padding: 10,
  },
  chatButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6320EE',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'white',
    width: 120,
    height: 50,
    alignSelf: 'flex-end',
    marginRight: 13,
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 160,
    borderWidth: 1,
    margin:5,
    borderColor: 'white',
  },
  ınputt: {
    marginTop: 10,
  },
});
