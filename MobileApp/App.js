import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from "socket.io-client";

export default function App() {
// empty can be used to pass in variables
// useEffect will rerun based on variables otherwise empty array will only run one time
  useEffect(function() {
    io("http://192.168.0.10:3001")
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
