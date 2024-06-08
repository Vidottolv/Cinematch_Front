// import Signin from '../pages/signin';
import Welcome from '../pages/welcome/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Cadastros } from '../pages/home';

const Stack = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{
                headerShown:false,
            }}
            />
            {/* <Stack.Screen
            name="signin"
            component={Signin}
            options={{
                headerShown:false,
            }}
            />
            <Stack.Screen
            name="home"
            component={Cadastros}
            options={{
                headerShown:false,
            }}
            /> */}
        </Stack.Navigator>
    )
}
