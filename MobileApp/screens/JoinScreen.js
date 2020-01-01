import React from 'react';
import { Button, Image, KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';

export default function JoinScreen() {
    return (
        <View style={{flex: 1, alignContent: "center", justifyContent: "center"}}>
            <Image resizeMode="contain" style={{ flex: 1 }} source={require("../assets/chat-icon.png")} />
            <View style={{ flex: 1, justifyContent: "space-around" }}>
            <TextInput style={{ fontSize: 30, textAlign: "center" }}placeholder="Enter username" />
            <Button title="Join Chat" />
            </View>
            {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
        </View>
    )
}