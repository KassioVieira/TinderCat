import React, { useImperativeHandle, forwardRef } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { interpolate, runOnJS, SharedValue, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { BreedType } from '../../types/BreedType';

const screenWidth = Dimensions.get('screen').width;

export interface CardSwiper {
    cat: BreedType;
    numberOfCards: number;
    currentIndex: SharedValue<number>;
    index: number;
    iLiked: () => void;
}

const CardSwippe = forwardRef(({ cat, numberOfCards, currentIndex, index, iLiked }: CardSwiper, ref) => {
    const translationX = useSharedValue(0);

    const animatedCard = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(
                    currentIndex.value,
                    [index - 1, index, index + 1],
                    [0.95, 1, 1]
                ),
            },
            {
                translateX: translationX.value,
            },
            {
                rotateZ: `${interpolate(
                    translationX.value,
                    [-screenWidth / 2, 0, screenWidth / 2],
                    [-15, 0, 15]
                )}deg`,
            },
        ],
    }));

    const gesture = Gesture.Pan()
        .onChange((event) => {
            translationX.value = event.translationX;

            currentIndex.value = interpolate(
                Math.abs(translationX.value),
                [0, 500],
                [index, index + 0.8]
            );
        })
        .onEnd((event) => {
            if (Math.abs(event.velocityX) > 400) {
                translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
                    velocity: event.velocityX,
                });
                currentIndex.value = withSpring(index + 1);
            } else {
                translationX.value = withSpring(0);
            }

            if (event.translationX > 0) {
                runOnJS(iLiked)();
            }
        });

    const likedPressed = () => {
        translationX.value = withSpring(500, { velocity: 1000 });
        currentIndex.value = withSpring(index + 1);
        runOnJS(iLiked)();
    };

    const dislikedPressed = () => {
        translationX.value = withSpring(-500, { velocity: 1000 });
        currentIndex.value = withSpring(index + 1);
    };

    useImperativeHandle(ref, () => ({
        likedPressed,
        dislikedPressed,
    }));

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View
                style={[
                    styles.card,
                    animatedCard,
                    {
                        zIndex: numberOfCards - index,
                    },
                ]}
            >
                <ImageBackground
                    style={styles.background}
                    source={{ uri: cat.image.url }}
                    borderRadius={16}
                    resizeMode="cover"
                >
                    <View style={styles.infos}>
                        <View style={styles.row}>
                            <Text style={styles.text}>{cat.name}</Text>
                            <Text style={styles.text}>{cat.adaptability}</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>{cat.country_code}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </Animated.View>
        </GestureDetector>
    );
});

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: '70%',
        alignSelf: 'center',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        position: 'absolute',
        backgroundColor: 'white',
    },

    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },

    infos: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        justifyContent: 'center',
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        alignSelf: 'center',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        color: 'black',
        fontSize: 12,
    },
});

export default CardSwippe;
