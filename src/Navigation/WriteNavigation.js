import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/Screens/HomeScreen';
import MoodScreen from '../components/Screens/MoodSceen';
import WriteFirstPage from '../Pages/Write/WriteFirstPage';
import WriteSecondPage from '../Pages/Write/WriteSecondPage';
import WriteThreePage from '../Pages/Write/WriteThreePage';
import WriteSixPage from '../Pages/Write/WriteSixPage';

const Stack = createNativeStackNavigator();

const WriteNavigation = () => (
    <Stack.Navigator
      initialRouteName="WriteFirstPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WriteFirstPage" component={WriteFirstPage} />
      <Stack.Screen name="WriteSecondPage" component={WriteSecondPage} />
      <Stack.Screen name="WriteThreePage" component={WriteThreePage} />
      <Stack.Screen name="WriteSixPage" component={WriteSixPage} />
    </Stack.Navigator> 
);

export default WriteNavigation;
