import LogInForm from '../screens/LogInForm';
import LoginInScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export const LogInScreenStack = createStackNavigator({
    LoginInScreen: LoginInScreen,
    LoginInForm: LogInForm,
    SignUpScreen: SignUpScreen,

}, {
        headerMode: 'none',
    }
)

export default createAppContainer(LogInScreenStack);
