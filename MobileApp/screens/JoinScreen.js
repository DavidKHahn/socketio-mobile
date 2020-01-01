import React from 'react';
import { Image, KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';

export default function JoinScreen() {
    return (
        <View style={{flex: 1, alignContent: "center", justifyContent: "center"}}>
            <Image resizeMode="contain" style={{ flex: 1 }} source={require("../assets/chat-icon.png")} />
            <View style={{ flex: 1 }}>
            <TextInput placeholder="Enter username" />
            <Button title="Join Chat" />
            </View>
            {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
        </View>
    )
}