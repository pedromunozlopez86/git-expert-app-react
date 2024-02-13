import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagesFromApi = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  
  useEffect(() => {
    getImagesFromApi();
  }, []);
  return {
    images,
    isLoading,
  };
};
