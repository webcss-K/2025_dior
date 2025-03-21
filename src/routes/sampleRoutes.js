import React from 'react';
import LayoutIndex from 'layouts';
import { lazy } from 'react';

const Main = lazy(() => import('pages/samplePage'));
const Page01 = lazy(() => import('pages/samplePage/Page01'));
const Page02 = lazy(() => import('pages/samplePage/Page02'));

// ==============================|| AUTH ROUTING ||============================== //

const samplePage = {
  path: '/',
  element: <LayoutIndex layout="samplePage" />,
  children: [
    {// Main
      path: '/',
      element: <Main metaTitle='Main' />,
    },
    {
      path: "/Page01",
      element: <Page01 metaTitle='페이지 1' />,
    },
    {
      path: "/Page02",
      element: <Page02 metaTitle='페이지 2' />,
    }
  ]
};

export default samplePage;
