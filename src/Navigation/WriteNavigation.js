import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/Screens/HomeScreen';
import MoodScreen from '../components/Screens/MoodSceen';
import React from 'react';
import WriteFirstPage from '../Pages/Write/WriteFirstPage'
import WriteSecondPage from '../Pages/Write/WriteSecondPage'

const Stack = createNativeStackNavigator();

const WriteNavigation = () => (
  <Stack.Navigator
    initialRouteName="WriteFirstPage"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="WriteFirstPage" component={WriteFirstPage} />
    <Stack.Screen name="WriteSecondPage" component={WriteSecondPage} />
  </Stack.Navigator>
);

export default WriteNavigation;
