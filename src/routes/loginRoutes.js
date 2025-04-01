import React from 'react';
import LayoutIndex from 'layouts';
import { lazy } from 'react';

const Login = lazy(() => import('pages/Login'));
const PageLink = lazy(() => import('pages'));

// ==============================|| AUTH ROUTING ||============================== //

const pageRoutes = {
  path: '/',
  element: <LayoutIndex layout="login" />,
  children: [
    {// PageLink
      path: "/",
      element: <PageLink metaTitle='페이지 링크' />,
    },
    {// Login
      path: "/Login",
      element: <Login metaTitle='로그인' />,
    }
  ]
};

export default pageRoutes;
