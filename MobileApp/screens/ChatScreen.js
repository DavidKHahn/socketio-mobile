import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
// access properties passed from FriendListScreen
ChatScreen.navigationOptions = screenProps => ({
  // grab name property from navigation
  title : screenProps.navigation.getParam("name")
})

export default function ChatScreen() {
  return (
    <View style={{flex: 1}}>
            <GiftedChat
                renderUsernameOnMessage
                messages={[]}
                // onSend={messages => onSend(messages)}
                user={{
                  _id: 1,
                }}
            />
    {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
  </View>
  );
}