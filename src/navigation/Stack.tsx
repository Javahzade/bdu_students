import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../views/Welcome";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    )
}