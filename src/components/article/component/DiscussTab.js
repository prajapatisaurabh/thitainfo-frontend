import React, { useState } from "react";
import "./Article.css";

function DiscussTab() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className="discussion-section">
      <h2>Discussion Section</h2>
      <form onSubmit={handleCommentSubmit}>
        <label>
          Add your comment:
          <textarea
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default DiscussTab;
