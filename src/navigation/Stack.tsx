import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../views/Sign-in";
import { SignUp } from "../views/Sign-up";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitle: "Qeydiyyat",
                headerTitleStyle: { fontSize:30},
            }}
        >
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: '' }} />
        </Stack.Navigator>
    );
};
