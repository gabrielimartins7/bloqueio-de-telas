import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screen/Home";
import { Contact } from "../screen/Contact";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
            <Screen name="Contact" component={Contact} />
        </Navigator>
    )
}