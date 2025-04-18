import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
  const { id, details, title } = post;
  return (
    <div
      style={{
        border: '2px dashed green',
        padding: '10px',
        margin: '15px',
        borderRadius: '30px',
      }}
    >
      <h2>{title}</h2>
      <div>
        <Link to={`/posts/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
