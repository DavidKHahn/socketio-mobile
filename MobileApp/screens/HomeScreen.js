console.ignoredYellowBox = ['Remote debugger'];
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View, YellowBox } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import io from "socket.io-client";
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default function HomeScreen() {
// messageToSend current state
// setMessageToSend updating state
const [messageToSend, setMessageToSend] = useState("");
const [recvMessages, setRecvMessages] = useState([]);
const socket = useRef(null);
// empty can be used to pass in variables
// useEffect will rerun based on variables otherwise empty array will only run one time
  useEffect(() => {
    socket.current = io("http://192.168.0.4:3001");
    socket.current.on("message", message => {
        // saves received msgs
         setRecvMessages(prevState => [...prevState, message]);
    });
    setRecvMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]);
  }, []);

  const sendMessage = () => {
    socket.current.emit("message", messageToSend);
    // clears message after sent
    setMessageToSend("");
  }

  return (
    <View style={{flex: 1}}>
    <GiftedChat
    messages={recvMessages}
    // onSend={messages => this.onSend(messages)}
    user={{
      _id: 1,
    }}
  />
    {
      Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
   }
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
