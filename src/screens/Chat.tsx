import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const Chat = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>02</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        fontSize: 126,
        color: '#BFBFC0'
    }
})

export default Chat;