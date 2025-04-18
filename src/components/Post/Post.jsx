import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
  const { id, details, title } = post;

  const navigate = useNavigate();

  const handleNavigate = () => {
    // navigate('/');
    navigate(`/posts/${id}`);
  };

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

        <button onClick={handleNavigate}>Details of: {id}</button>
      </div>
    </div>
  );
};

export default Post;
