import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
  // console.log(user);
  const { id, name, email, phone } = user;

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
    </div>
  );
};

export default User;
