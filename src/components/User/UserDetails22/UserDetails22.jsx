import React, { use } from 'react';

const UserDetails22 = ({ userPromise }) => {
  const promiseData = use(userPromise);
  const { username, name } = promiseData;
  return (
    <div>
      <h2>UserName:{username}</h2>
      <p>Name: {name}</p>
    </div>
  );
};

export default UserDetails22;
