import { INPUT_TEXT } from "./type";

const initialState = {
  text: "",
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    // cdcndjc
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
};
