import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREACTED,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  COMMENTS_LOAD,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./type";

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}

export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}
export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREACTED,
    data: { text, id },
  };
}
export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}
export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    }, setTimeout(() => {
dispatch(errorOff())
    },2000)
    );
  };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}

export function commentsLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const jsonData = await response.json();
      setTimeout(() => {
        dispatch({
          type: COMMENTS_LOAD,
          data: jsonData,
        });
        dispatch(loaderOff());
      }, 3000);
    } catch (err) {
      dispatch(errorOn("Ощибка API"));
      dispatch(loaderOff());
    }
  };
}
