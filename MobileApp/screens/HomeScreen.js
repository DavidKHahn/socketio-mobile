console.ignoredYellowBox = ['Remote debugger'];
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, View, YellowBox } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import io from "socket.io-client";
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default function HomeScreen() {
// messageToSend current state
// setMessageToSend updating state
const [recvMessages, setRecvMessages] = useState([]);
const socket = useRef(null);
// empty can be used to pass in variables
// useEffect will rerun based on variables otherwise empty array will only run one time
  useEffect(() => {
    socket.current = io("http://192.168.1.3:3001");
    socket.current.on("message", message => {
        // saves sent msgs
        setRecvMessages(prevState => GiftedChat.append(prevState, message));
    });
  }, []);

  const onSend = (messages) => {
    console.log(messages);
    socket.current.emit("message", messages[0].text);
    setRecvMessages(prevState => GiftedChat.append(prevState, messages));
  };

  return (
    <View style={{flex: 1}}>
    <GiftedChat
    messages={recvMessages}
    onSend={messages => onSend(messages)}
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