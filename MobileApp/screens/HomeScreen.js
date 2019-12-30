console.ignoredYellowBox = ['Remote debugger'];
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View, YellowBox } from 'react-native';
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

    socket.current = io("http://192.168.1.3:3001");
    socket.current.on("message", message => {
        // saves received msgs
         setRecvMessages(prevState => [...prevState, message]);
    });
  }, []);

  const sendMessage = () => {
    socket.current.emit("message", messageToSend);
    // clears message after sent
    setMessageToSend("");
  }

  const textOfRecvMessages = recvMessages.map(msg => (
      <Text key={msg}>{msg}</Text>
  ));

  return (
    <View style={styles.container}>
        {textOfRecvMessages}
      <TextInput
        value={messageToSend}
        onChangeText={text => setMessageToSend(text)} // updates state of message
        placeholder="Enter chat message..."
        onSubmitEditing={sendMessage}
        />
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
