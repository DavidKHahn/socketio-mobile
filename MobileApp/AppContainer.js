import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import ChatScreen from './screens/ChatScreen';
import FriendListScreen from './screens/FriendListScreen';
import JoinScreen from './screens/JoinScreen';

const AppStack = createStackNavigator({ Home: FriendListScreen, Chat: ChatScreen });

export default createAppContainer(
    createSwitchNavigator({
        App: AppStack,
        Join: JoinScreen
    }, {
        // app starts off with "Join"
        initialRouteName: "Join"
    })
)