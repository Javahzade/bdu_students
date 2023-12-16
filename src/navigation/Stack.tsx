import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../views/Welcome";
import { SignIn } from "../views/SignIn";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}