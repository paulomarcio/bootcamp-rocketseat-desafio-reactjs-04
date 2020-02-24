import React from 'react';

import Comment from '../comment/index';

const PostItem = ({ post }) => {
  return (
    <div className="posts">
      <div className="profile">
        <div className="image">
          <img src={`http://i.pravatar.cc/45?img=${post.image}`} />
        </div>
        <div className="info">
          <p className="name">{post.name}</p>
          <p className="date">{post.date}</p>
        </div>
      </div>
      <div className="text">
        <p>{post.text}</p>
      </div>
      {post.comments.map(comment => <Comment key={comment.image} comment={comment} />)}
    </div>
  );
}

export default PostItem;