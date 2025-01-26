export type BreedType = {
    weight: {
        imperial: string;
        metric: string;
    };
    id: string;
    name: string;
    origin: string;
    country_codes: string;
    country_code: string;
    reference_image_id: string;
    adaptability: number;
    image: {
        id:string,
        width: number,
        height: number,
        url: string,
    }
}