import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComposeFirstPage from '../Pages/Compose/ComposeFirstPage';
import ComposeSecondPage from '../Pages/Compose/ComposeSecond';
const Stack = createNativeStackNavigator();

const ComposeNavigation = () => (
  <Stack.Navigator
    initialRouteName="ComposeFirstPage"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="ComposeFirstPage" component={ComposeFirstPage} />
    <Stack.Screen name="ComposeSecondPage" component={ComposeSecondPage} />
  </Stack.Navigator>
);

export default ComposeNavigation;
