import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Header } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';

// access properties passed from FriendListScreen
ChatScreen.navigationOptions = screenProps => ({
  // grab name property from navigation
  title : screenProps.navigation.getParam("name")
})

export default function ChatScreen({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
            <GiftedChat
                renderUsernameOnMessage
                messages={[]}
                onSend={messages =>
                // 'server/' goes directly to the socket.io backend
                // pass in data: messages
                  dispatch({type: "server/private-message", data: {text: messages[0].text, to: navigation.getParam("userId") }})}
                user={{
                  _id: 1,
                }}
            />
    {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Header.HEIGHT + 20} />}
  </View>
  );
}