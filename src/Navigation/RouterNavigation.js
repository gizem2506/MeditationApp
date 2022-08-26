import React from 'react';
import HomeScreen from '../components/Screens/HomeScreen';
import MoodScreen from '../components/Screens/MoodSceen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WriteNavigation from './WriteNavigation';
import DrawNavigation from './DrawNavigation';
import ThinkNavigation from './ThinkNavigation';
import MessageNavigation from './MessageNavigation';
const Stack = createNativeStackNavigator();

const RouterNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Mood" component={MoodScreen} />
      <Stack.Screen name="Write" component={WriteNavigation} />
      <Stack.Screen name="Draw" component={DrawNavigation} />
      <Stack.Screen name="Think" component={ThinkNavigation} />
      <Stack.Screen name="Message" component={MessageNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RouterNavigation;