import { SafeAreaView, View, StyleSheet } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import useCats from "./useCats";
import { Card, FloatingButton, Switch } from "../../components";

const Cats = () => {
    const { activeIndex, catsList, addVote, handleDislike, handleLike, cardRefs } = useCats();
    return (
        <SafeAreaView style={{flex: 1}}>
            <Switch />
            <View style={styles.container}>
                {
                    catsList?.map((item, index) => (
                        <Card
                            key={item.id}
                            cat={item} 
                            currentIndex={activeIndex}
                            index={index}
                            numberOfCards={catsList.length}
                            iLiked={() =>  addVote.mutate(item)}
                            ref={(el) => (cardRefs.current[index] = el)}
                        />
                    ))
                }
                <View style={styles.bottomContent}>
                    <FloatingButton
                        onPress={handleDislike}
                        icon={<AntDesign name="close" size={24} color="#E16359" />}
                    />
                    <FloatingButton 
                        onPress={handleLike}
                        icon={<AntDesign name="heart" size={24} color="#6BD88E" />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '80%',
    },

    bottomContent: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        position: 'absolute',
        bottom: 0,
    }
})

export default Cats