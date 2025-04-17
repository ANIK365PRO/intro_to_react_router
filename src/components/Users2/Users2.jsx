import React, { use } from 'react';

const Users2 = ({ users_2_promise }) => {
  const users_2_data = use(users_2_promise);
  console.log(users_2_data);
  return (
    <div>
      <h2>it's Users-2 page</h2>
    </div>
  );
};

export default Users2;
