import React from 'react';
import { View, StyleSheet } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';

const Switch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.active}>
                <Fontisto name="tinder" size={16} color="#FD267D" />
            </View>
            <View style={styles.item}>
                <AntDesign name="star" size={16} color="#BFBFC0" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 84,
        height: 28,
        borderRadius: 28,
        backgroundColor: '#E3E3E4',
        alignSelf: 'center',
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    active: {
        backgroundColor: 'white',
        width: 40,
        height: 24,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: 40,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Switch;