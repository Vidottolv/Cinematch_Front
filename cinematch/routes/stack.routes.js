// import Signin from '../pages/signin';
import Welcome from '../pages/welcome/screen';
import StartQuiz from '../pages/startquiz/screen';
import QuizScreenOne from '../pages/quizScreens/screenOne/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizScreenTwo from '../pages/quizScreens/screenTwo/screen';
import QuizScreenThree from '../pages/quizScreens/screenThree/screen';
import QuizScreenFour from '../pages/quizScreens/screenFour/screen';

const Stack = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{
                headerShown:false,
            }}/>
            <Stack.Screen
            name="startquiz"
            component={StartQuiz}
            options={{
                headerShown:false,
            }}/>
            <Stack.Screen
            name="screenone"
            component={QuizScreenOne}
            options={{
                headerShown:false,
            }}/>
            <Stack.Screen
            name="screentwo"
            component={QuizScreenTwo}
            options={{
                headerShown:false,
            }}/>
            <Stack.Screen
            name="screenthree"
            component={QuizScreenThree}
            options={{
                headerShown:false,
            }}/>
            <Stack.Screen
            name="screenfour"
            component={QuizScreenFour}
            options={{
                headerShown:false,
            }}/>
        </Stack.Navigator>
    )
}
