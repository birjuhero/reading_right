import * as t from "./types";

export const setUnsplashImages = (data) => {
  return {
    type: t.SET_IMAGES,
    payload: data,
  };
};