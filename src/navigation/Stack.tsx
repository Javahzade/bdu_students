import { createStackNavigator } from "@react-navigation/stack";
import Step1 from "../views/Step1";
import { Welcome } from "../views/Welcome";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
            <Stack.Screen name="Step1" component={Step1} />
        </Stack.Navigator>
    )
}