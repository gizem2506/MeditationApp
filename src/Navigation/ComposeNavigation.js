import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComposeFirstPage from '../Pages/Compose/ComposeFirstPage';
const Stack = createNativeStackNavigator();

const ComposeNavigation = () => (
  <Stack.Navigator
    initialRouteName="ComposeFirstPage"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="ComposeFirstPage" component={ComposeFirstPage} />
  </Stack.Navigator>
);

export default ComposeNavigation;
