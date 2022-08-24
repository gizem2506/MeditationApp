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
import Image1 from '../../assets/manzara2.png';
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
          <Text style={styles.chatButton}>Chat Start</Text>
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

  imagecontainer: {
    height: height,
    width: width,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  chatButton: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 70,
    height: 40,
    justifyContent: 'center',
    marginLeft: 160,
  },
  ınputt: {},
});
