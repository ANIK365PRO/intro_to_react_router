import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails22 from './UserDetails22/UserDetails22';

const User = ({ user }) => {
  // console.log(user);
  const [showInfo, setShowInfo] = useState(false);

  const { id, name, email, phone } = user;

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then(res => res.json());

  const userStyle = {
    border: '2px solid skyblue',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px',
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>
        <span>{phone}</span>
      </p>
      <Link to={`/users/${id}`}>Show details</Link>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'Hide' : 'Show'} info
      </button>{' '}
      <br />
      {showInfo && (
        <Suspense fallback={<span>Loadding....</span>}>
          <UserDetails22 userPromise={userPromise}></UserDetails22>
        </Suspense>
      )}
    </div>
  );
};

export default User;
