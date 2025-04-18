import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import RNfild from './components/RNfild/RNfild.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UsersDetsils from './components/UsersDetails/UsersDetsils.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostsDetails from './components/PostsDetails/PostsDetails.jsx';

const users_2_promise = fetch(
  'https://jsonplaceholder.typicode.com/users'
).then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      { path: 'rNfild', Component: RNfild },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),

        Component: Users,
      },
      {
        path: 'users2',
        element: (
          <Suspense fallback={<span>Users data loading.....</span>}>
            <Users2 users_2_promise={users_2_promise}></Users2>
          </Suspense>
        ),
      },
      {
        path: 'users/:userId',

        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

        Component: UsersDetsils,
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts,
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostsDetails,
      },
      {
        path: '*',
        element: <span>Not found: 404 status</span>,
      },
    ],
  },
  {
    path: 'about',
    element: <div>about for react</div>,
  },
  {
    path: 'blogs',
    element: <div>blogs for react</div>,
  },
  {
    path: 'app',
    Component: App,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
