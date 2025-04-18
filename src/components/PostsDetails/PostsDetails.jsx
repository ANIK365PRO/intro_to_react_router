import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostsDetails = () => {
  const post = useLoaderData();

  const navigate = useNavigate();
  return (
    <div>
      <h2>POsts details here</h2>

      <h3>{post.title}</h3>
      <h3>{post.body}</h3>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default PostsDetails;
