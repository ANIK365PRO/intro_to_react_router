import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css';

const Root = () => {
  return (
    <div>
      <Header> </Header>
      <div className="root_main">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

/**
 * 1. use: usePromise > Suspense > promise > usePromise.
 * 2. [less used so far] > useState + useEffect (()=>{},[])
 * 3. set loader in the route defination . load data before router Component is rendered.
 */
