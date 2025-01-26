import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { runOnJS } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { useAnimatedReaction } from "react-native-reanimated";
import { useState } from "react";
import { getCats, vote } from "../../services/cats/CatService";
import { BreedType } from "../../types/BreedType";

const useCats = () => {
  const cardRefs = useRef<any[]>([]);
    const activeIndex = useSharedValue(0);
    const [index, setIndex] = useState(0);

    useAnimatedReaction(
        () => activeIndex.value,
        (value, _) => {
          if (Math.floor(value) !== index) {
            runOnJS(setIndex)(Math.floor(value));
          }
        }
      );


    const { isLoading, data: catsList } = useQuery({
        queryKey: ['cats'],
        queryFn: async () => await getCats()
    })


    const addVote = useMutation({
      mutationFn: async (cat: BreedType) => {
        await vote({
          image_id: cat.image.id,
          sub_id: 'user_123',
          value: 1,
        })
      },
      onSuccess: () => {
        console.log('success..')
      }
    })


    const handleLike = () => {
      if (cardRefs.current[activeIndex.value]) {
          cardRefs.current[activeIndex.value].likedPressed();
      }
  };

  const handleDislike = () => {
      if (cardRefs.current[activeIndex.value]) {
          cardRefs.current[activeIndex.value].dislikedPressed();
      }
  };

    return {
        isLoading,
        catsList: catsList,
        activeIndex,
        index,
        addVote,
        cardRefs,
        handleLike,
        handleDislike,
    }
}

export default useCats;