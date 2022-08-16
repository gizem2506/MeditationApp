import React from 'react';
import HomeScreen from './src/components/Screens/HomeScreen';
import MoodScreen from './src/components/Screens/MoodSceen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mood" component={MoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
