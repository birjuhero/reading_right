import * as f from "./functions";
import * as t from "./types";
import INITIAL_STATE from "./initialState";
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.SET_IMAGES:
      return f.setImage(state, action);
    default:
      return state;
  }
};
