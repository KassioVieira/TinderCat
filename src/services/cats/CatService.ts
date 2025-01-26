
import { BreedType } from "../../types/BreedType";
import Api from "../Api";

const getCats = async () => {
  try {
    const response = await Api.get('breeds?limit=10&page=0');
    return response.data as Array<BreedType>;
  } catch (error) {
    console.error('Error fetching cats:', error);
    throw error;
  }
};

const vote = async ({image_id, sub_id, value}: {image_id: string, sub_id: string, value: number}) => {
  try {
    const response = await Api.post('votes', {image_id, sub_id, value});
    return response.data as Array<BreedType>;
  } catch (error) {
    console.error('Error vote', error);
    throw error;
  }
};

export {getCats, vote}