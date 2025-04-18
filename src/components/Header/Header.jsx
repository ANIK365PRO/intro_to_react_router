import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h1>this is header</h1>
      <nav>
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="mobiles"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          Mobiles
        </NavLink>

        <NavLink
          to="laptops"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          Laptops
        </NavLink>

        <NavLink
          to="rNfild"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          RNfild
        </NavLink>

        <NavLink
          to="users"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          Users
        </NavLink>

        <NavLink
          to="users2"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          Users-2
        </NavLink>

        <NavLink
          to="posts"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'red' : 'black',
            };
          }}
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
