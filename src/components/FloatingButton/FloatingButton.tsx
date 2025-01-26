import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface FloatingButtonProps {
    icon: ReactNode
    onPress: () => void
}

const FloatingButton = ({icon, onPress} : FloatingButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            testID='floatingButton'
        >
           {icon}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
})

export default FloatingButton