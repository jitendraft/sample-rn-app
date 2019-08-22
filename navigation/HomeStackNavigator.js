import HomeScreen from '../screens/MainScreen';
import AudioDetail from '../screens/AudioDetail';


import { createStackNavigator, createAppContainer } from 'react-navigation';


export const HomeScreenStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen
        },
        AudioDetail: {
            screen: AudioDetail,
            navigationOptions: ({ navigation }) => ({
                routeName: `'s Profile'`,
                params: "132"
            }),
        },
    }, {
        headerMode: 'none',
    }
)

export default createAppContainer(HomeScreenStack);
