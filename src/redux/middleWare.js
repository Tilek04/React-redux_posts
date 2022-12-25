import { COMMENT_CREACTED } from "./type";
import { errorOn } from "./actions";

export function spamFilter({dispatch}) {
    const badWords = ['Осел', "Ищак"]
  return function(next) {
    return function(action) {
        if(action.type === COMMENT_CREACTED) {
         const hasWords = badWords.some(res => action.data.text.includes(res));
         if (hasWords) {
            return dispatch(errorOn('Норм общайся'))
         }
        }
        return next(action)
    }
  }
 
}