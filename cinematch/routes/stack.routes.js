// import Signin from '../pages/signin';
import Welcome from '../pages/welcome/screen';
import StartQuiz from '../pages/startquiz/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
            <Stack.Screen
            name="startquiz"
            component={StartQuiz}
            options={{
                headerShown:false,
            }}
            />
            {/* <Stack.Screen
            name="home"
            component={Cadastros}
            options={{
                headerShown:false,
            }}
            /> */}
        </Stack.Navigator>
    )
}
