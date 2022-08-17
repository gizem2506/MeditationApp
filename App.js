import React from 'react';
import HomeScreen from './src/components/Screens/HomeScreen';
import MoodScreen from './src/components/Screens/MoodSceen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RouterNavigation from './src/Navigation/RouterNavigation';
const Stack = createNativeStackNavigator();

const App = () => {
  return <RouterNavigation />;
};

export default App;
