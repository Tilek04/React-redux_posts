import { COMMENTS_LOAD, COMMENT_CREACTED, COMMENT_DELETE, COMMENT_UPDATE } from "./type";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log("comments reducer", action);

  switch (action.type) {
    case COMMENT_CREACTED:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
      case COMMENTS_LOAD:
        const commentNew = action.data.map(res => {
         return{
          text: res.name,
          id: res.id,

         }
        })
        return {
          ...state,
          comments: commentNew
        };
    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === data.id);

      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];

      return {
        ...state,
        comments: nextComments,
      };
    case COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const itemIndex = comments.findIndex((res) => res.id === id);

        const nextComments = [
          ...comments.slice(0, itemIndex),
          ...comments.slice(itemIndex + 1),
        ];
        return {
          ...state,
          comments: nextComments,
        };
      })();
      

    default:
      return state;
  }
};
