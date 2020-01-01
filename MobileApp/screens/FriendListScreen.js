import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function FriendListScreen(){
    const usersOnline = useSelector(state => state.usersOnline);
    console.log("usersOnline", usersOnline);

    const { itemContainerStyle } = styles;

    return (
    <View style={{ flex: 1 }}>
        <FlatList
            data={usersOnline}
            renderItem={({item}) => {
                console.log("item", item);
                return (
                <View style={itemContainerStyle}>
                    <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: item.avatar }} />
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>{item.username}</Text>
                </View>
                </View>
                );
            }}
            keyExtractor={item => item.userId}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    itemContainerStyle: {flex: 1, flexDirection: "row"}
})