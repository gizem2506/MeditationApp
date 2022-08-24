import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import {io} from 'socket.io-client';
import Image1 from '../../assets/manzara2.png';
import {Dimensions} from 'react-native';
import Background from '../../components/Common/Background';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
let socket;
const ComposeSecondPage = ({route, navigation}) => {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const {userName} = route.params;

  React.useEffect(() => {
    if (!socket) {
      socket = io('ws://192.168.1.70:5002');
      console.log('new connection');
      socket.on('connect', () => {
        console.log(socket.id);
      });

      socket.on('event', data => {
        console.log('new event', data);
        messageList.push(data);
        setMessageList([...messageList]);
      });

      socket.on('disconnect', () => {
        console.log('onDisconnect');
      });
    }
  }, []);
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

      <ScrollView>
        <View>
          {messageList.map(message => {
            return (
              <Text>
                {message.userName} {message.message} {message.time}
              </Text>
            );
          })}
        </View>

        <TextInput
          style={styles.input}
          onChangeText={setMessage}
          value={message}
        />
  
        <Button
          onPress={() => {
            socket.emit('event', {message: message, userName: userName});
          }}
          title=" BUTTON"
          color="purple"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ComposeSecondPage;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
  },

  imagecontainer: {
    height: height,
    width: width,
  },
  input: {
    bottom: 0,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    margin: 30,
  },
});
