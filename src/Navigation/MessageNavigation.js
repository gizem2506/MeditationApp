import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageFirstPage from '../Pages/Message/MessageFirstPage';
const Stack = createNativeStackNavigator();

const MessageNavigation = () => (
  <Stack.Navigator
    initialRouteName="MessageFirstPage"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="MessageFirstPage" component={MessageFirstPage} />
  </Stack.Navigator>
);

export default MessageNavigation;
