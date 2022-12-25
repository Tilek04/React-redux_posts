import { useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate } from "./redux/actions";
import { commentsLoad } from "./redux/actions";

function Comments(props) {

  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
   
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const dispatch = useDispatch();
  const handleInput = (e) => {
    
    setTextComment(e.target.value);
  };
  const handleSabmit = (e) => {
    e.preventDefault();
   
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

useEffect(() => {
  dispatch(commentsLoad())
}, [dispatch])

  return (
    <div className="card-comments">
      <form onSubmit={handleSabmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length && comments.map((res) => {
        return <SingleComment key={res.id} data={res}/>
      })}

    </div>
  );
}
export default Comments;
