import { createStackNavigator } from "@react-navigation/stack";
import { PrivateAccount } from "../views/PrivateAccount";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PrivateAccount" component={PrivateAccount} />
        </Stack.Navigator>
    )
}