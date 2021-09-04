export const setImage = (state, action) => {
    return {
      ...state,
      images: action.payload,
    };
  };