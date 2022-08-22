import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThinkFirstPage from '../Pages/Think/ThinkFirstPage';
import ThinkSecondPage from '../Pages/Think/ThinkSecondPage';
import ThinkThreePage from '../Pages/Think/ThinkThreePage';
import ThinkFourPage from '../Pages/Think/ThinkFourPage';
import ThinkFivePage from '../Pages/Think/ThinkFivePage';
import ThinkSixPage from '../Pages/Think/ThinkSixPage';
const Stack = createNativeStackNavigator();

const ThinkNavigation = () => (
  <Stack.Navigator
    initialRouteName="ThinkFirstPage"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="ThinkFirstPage" component={ThinkFirstPage} />
    <Stack.Screen name="ThinkSecondPage" component={ThinkSecondPage} />
    <Stack.Screen name="ThinkThreePage" component={ThinkThreePage} />
    <Stack.Screen name="ThinkFourPage" component={ThinkFourPage} />
    <Stack.Screen name="ThinkFivePage" component={ThinkFivePage} />
    <Stack.Screen name="ThinkSixPage" component={ThinkSixPage} />
  </Stack.Navigator>
);

export default ThinkNavigation;
