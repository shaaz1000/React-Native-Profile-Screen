import React from 'react';
import ProfileFeedScreen from "./ProfileFeedScreen"
import RegistrationScreen from "./RegistrationScreen"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()

const Index = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Registration" component={RegistrationScreen}/>
                <Stack.Screen name="Profile" component={ProfileFeedScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index
