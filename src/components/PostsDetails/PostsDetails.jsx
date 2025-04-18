import React from 'react';
import { useLoaderData } from 'react-router';

const PostsDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <h2>POsts details here</h2>

      <h3>{post.title}</h3>
      <h3>{post.body}</h3>
    </div>
  );
};

export default PostsDetails;
