import React, { useState } from 'react';
import { Button, Image, KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function JoinScreen({ joinChat }) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Image resizeMode="contain" style={{ flex: 1 }} source={require("../assets/chat-icon.png")} />
            <View style={{ flex: 1, justifyContent: "space-around" }}>
            <TextInput
                onChangeText={text => setUsername(text)}
                value={username}
                style={{ fontSize: 30, textAlign: "center" }}
                placeholder="Enter username"
            />
            {/* dispatching actions make things change */}
            <Button title="Join Chat" onPress={() => dispatch({type: "server/join", data: username })} />
            </View>
            {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
        </View>
    )
}