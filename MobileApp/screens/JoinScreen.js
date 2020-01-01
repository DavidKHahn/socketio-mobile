import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

export default function JoinScreen() {
    return (
        <View style={{flex: 1, alignContent: "center", justifyContent: "center"}}>
            <Image source={require("../assets/chat-icon.png")} />
            <TextInput placeholder="Enter username" />
            <Button title="Join Chat" />
            <Text>JoinScreen</Text>
        </View>
    )
}