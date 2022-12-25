import { useState, useEffect } from "react";
import { commentUpdate } from "./redux/actions";
import { useDispatch } from "react-redux";
import { commentDelete } from "./redux/actions";

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;
  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);
  const handleInput = (e) => {
    setCommentText(e.target.value);
  };
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(commentUpdate(commentText, id))
  }
const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id))
 
}

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
