import HomeScreen from "../components/Screens/HomeScreen";
import MoodScreen from "../components/Screens/MoodSceen";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WriteNavigation from "./WriteNavigation";

const Stack = createNativeStackNavigator();


const RouterNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Mood" component={MoodScreen} />
            <Stack.Screen name="Write" component={WriteNavigation} />
            {/*<Stack.Screen name="Draw" component={DrawDetail} />*/}
            {/*<Stack.Screen name="Think" component={ThinkDetail} />*/}
            {/*<Stack.Screen name="Compose" component={ComposeDetail} />*/}
        </Stack.Navigator>
    </NavigationContainer>
);

export default RouterNavigation;
