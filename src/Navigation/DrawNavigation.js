import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawFirstPage from '../Pages/Draw/DrawFirstPage';
import DrawSecondPage from '../Pages/Draw/DrawSecondPage';
import DrawThreePage from '../Pages/Draw/DrawThreePage';
import DrawFourPage from '../Pages/Draw/DrawFourPage';
import DrawFivePage from '../Pages/Draw/DrawFivePage';
import DrawSixPage from '../Pages/Draw/DrawSixPage';
import DrawSevenPage from '../Pages/Draw/DrawSevenPage';
const Stack = createNativeStackNavigator();

const DrawNavigation = () => (
  <Stack.Navigator
    initialRouteName="DrawFirstPage"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="DrawFirstPage" component={DrawFirstPage} />
    <Stack.Screen name="DrawSecondPage" component={DrawSecondPage} />
    <Stack.Screen name="DrawThreePage" component={DrawThreePage} />
    <Stack.Screen name="DrawFourPage" component={DrawFourPage} />
    <Stack.Screen name="DrawFivePage" component={DrawFivePage} />
    <Stack.Screen name="DrawSixPage" component={DrawSixPage} />
    <Stack.Screen name="DrawSevenPage" component={DrawSevenPage} />
  </Stack.Navigator>
);

export default DrawNavigation;
