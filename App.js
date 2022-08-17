import React from 'react';
import HomeScreen from './src/components/Screens/HomeScreen';
import MoodScreen from './src/components/Screens/MoodSceen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WriteDetail from './src/components/Details/WriteDetail';
import ThinkDetail from './src/components/Details/ThinkDetail';
import ComposeDetail from './src/components/Details/ComposeDetail';
import DrawDetail from './src/components/Details/DrawDetail';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="Write" component={WriteDetail} />
        <Stack.Screen name="Draw" component={DrawDetail} />
        <Stack.Screen name="Think" component={ThinkDetail} />
        <Stack.Screen name="Compose" component={ComposeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
