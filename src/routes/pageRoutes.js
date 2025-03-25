import React from 'react';
import LayoutIndex from 'layouts';
import { lazy } from 'react';

const ReservationCalendar = lazy(() => import('pages/ReservationCalendar'));
const ReservationList = lazy(() => import('pages/ReservationList'));
const Notice = lazy(() => import('pages/Notice'));
const TextManagement = lazy(() => import('pages/TextManagement'));

// ==============================|| AUTH ROUTING ||============================== //

const pageRoutes = {
  path: '/',
  element: <LayoutIndex layout="basic" />,
  children: [
    {// Main > ReservationCalendar
      path: '/',
      element: <ReservationCalendar metaTitle='예약 캘린더' />,
    },
    {// ReservationList
      path: "/ReservationList",
      element: <ReservationList metaTitle='예약 리스트' />,
    },
    {// Notice
      path: "/Notice",
      element: <Notice metaTitle='공지사항' />,
    },
    {// TextManagement
      path: "/TextManagement",
      element: <TextManagement metaTitle='텍스트 관리' />,
    }
  ]
};

export default pageRoutes;
