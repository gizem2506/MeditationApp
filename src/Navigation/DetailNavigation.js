import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailFirstPage from '../Pages/Detail/DetailFirstPage';
import DetailSecondPage from '../Pages/Detail/DetailSecondPage';
import DetailThreePage from '../Pages/Detail/DetailThreePage';
import DetailFourPage from '../Pages/Detail/DetailFourPage';
import DetailFivePage from '../Pages/Detail/DetailFivePage';
import DetailSixPage from '../Pages/Detail/DetailSixPage';
const Stack = createNativeStackNavigator();

const DetailNavigation = () => (
  <Stack.Navigator
    initialRouteName="DetailFirstPage"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="DetailFirstPage" component={DetailFirstPage} />
    <Stack.Screen name="DetailSecondPage" component={DetailSecondPage} />
    <Stack.Screen name="DetailThreePage" component={DetailThreePage} />
    <Stack.Screen name="DetailFourPage" component={DetailFourPage} />
    <Stack.Screen name="DetailFivePage" component={DetailFivePage} />
    <Stack.Screen name="DetailSixPage" component={DetailSixPage} />
  </Stack.Navigator>
);

export default DetailNavigation;
