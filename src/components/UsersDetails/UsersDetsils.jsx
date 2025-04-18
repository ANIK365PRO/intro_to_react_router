import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const UsersDetsils = () => {
  const user = useLoaderData();

  const navigate = useNavigate();

  const { name, website } = user;
  return (
    <div>
      <h3>Users details here</h3>

      <h5>{name}</h5>
      <p>website: {website}</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default UsersDetsils;
