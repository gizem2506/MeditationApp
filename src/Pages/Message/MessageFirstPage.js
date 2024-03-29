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
import {io} from 'socket.io-client';

import Image1 from '../../assets/manzara9.jpg';
import {Dimensions} from 'react-native';
import Background from '../../components/Common/Background';
import {ScrollView} from 'react-native-gesture-handler';
import {
  _initFetchMessages,
  _sendNewMessage,
} from '../../state/actions/chatActions';
import {useDispatch, useSelector} from 'react-redux';
const {width, height} = Dimensions.get('window');
let socket;

const MessageFirstPage = () => {
  const [userName, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const {messageList, currentUser} = useSelector(state => state.chat);

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
      {!currentUser ? (
        <View>
          <Text style={styles.chatext}>Kullanıcı Adı </Text>
          <View style={styles.inputt}>
            <TextInput
              style={styles.textInput}
              onChangeText={setUsername}
              value={userName}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(_initFetchMessages(userName))}>
              <Text style={styles.chatButton}>Devam Et</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ScrollView>
          <View>
            <View>
              {messageList.map(message => {
                return (
                  <View>
                    <Text style={styles.chatt}>
                      {message.userName} {message.message}
                    </Text>
                    <Text style={styles.time}>{message.time}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.sabitContainer}>
              <Text style={styles.chatText}>Chat</Text>
              <View style={styles.inputt}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setMessage}
                  value={message}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    dispatch(_sendNewMessage({message, userName: currentUser}))
                  }>
                  <Text style={styles.chatButton}>Gönder</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MessageFirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  chatext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 230,
    marginLeft: 10,
  },

  time: {
    alignSelf: 'flex-end',
    marginRight: 9,
    color: '#ffffff',
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
    color: '#ffffff',
  },
  chatText: {fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 8},
  chatButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6320EE',
    fontSize: 20,
  },
  chatt: {
    color: 'white',
    marginLeft:8,
    
  },
  button: {
    backgroundColor: 'white',
    width: 120,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 13,
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 160,
    borderWidth: 1,
    margin: 5,
    borderColor: 'white',
  },
  ınputt: {
    marginTop: 10,
  },
  sabitContainer: {},
});
