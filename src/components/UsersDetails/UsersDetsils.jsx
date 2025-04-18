import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetsils = () => {
  const user = useLoaderData();

  const { name, website } = user;
  return (
    <div>
      <h3>Users details here</h3>

      <h5>{name}</h5>
      <p>website: {website}</p>
    </div>
  );
};

export default UsersDetsils;
