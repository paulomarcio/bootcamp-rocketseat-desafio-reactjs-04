import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comments">
      <div className="image"><img src={`http://i.pravatar.cc/30?img=${comment.image}`} /></div>
      <div className="text">
        <p><span>{comment.name}</span> {comment.text}</p>
      </div>
    </div>
  );
}

export default Comment;