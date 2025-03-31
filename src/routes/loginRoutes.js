import React from 'react';
import LayoutIndex from 'layouts';
import { lazy } from 'react';

const Login = lazy(() => import('pages/Login'));

// ==============================|| AUTH ROUTING ||============================== //

const pageRoutes = {
  path: '/',
  element: <LayoutIndex layout="login" />,
  children: [
    {// Login
      path: "/Login",
      element: <Login metaTitle='로그인' />,
    }
  ]
};

export default pageRoutes;
