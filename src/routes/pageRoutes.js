import React from 'react';
import LayoutIndex from 'layouts';
import { lazy } from 'react';

const ReservationCalendar = lazy(() => import('pages/ReservationCalendar'));
const ReservationCalendarAdd = lazy(() => import('pages/ReservationCalendar/Add'));
const ReservationCalendarManagement = lazy(() => import('pages/ReservationCalendar/Management'));
const ReservationCalendarOpenSetting = lazy(() => import('pages/ReservationCalendar/OpenSetting'));

const ReservationList = lazy(() => import('pages/ReservationList'));

const Notice = lazy(() => import('pages/Notice'));
const NoticeView = lazy(() => import('pages/Notice/View'));

const TextManagement = lazy(() => import('pages/TextManagement'));
const TextManagementView = lazy(() => import('pages/TextManagement/View'));

// ==============================|| AUTH ROUTING ||============================== //

const pageRoutes = {
  path: '/',
  element: <LayoutIndex layout="basic" />,
  children: [
    {// Main > ReservationCalendar
      path: '/ReservationCalendar',
      element: <ReservationCalendar metaTitle='예약 캘린더' key='1' />,
    },
    {// Main > ReservationCalendarAdd
      path: '/ReservationCalendar/Add',
      element: <ReservationCalendarAdd metaTitle='커리큘럼 등록하기' key='1' />,
    },
    {// Main > ReservationCalendarManagement
      path: '/ReservationCalendar/Management',
      element: <ReservationCalendarManagement metaTitle='커리큘럼 관리' key='1' />,
    },
    {// Main > ReservationCalendarOpenSetting
      path: '/ReservationCalendar/OpenSetting',
      element: <ReservationCalendarOpenSetting metaTitle='오픈 설정' key='1' />,
    },

    {// ReservationList
      path: "/ReservationList",
      element: <ReservationList metaTitle='예약 리스트' key='2' />,
    },

    {// Notice
      path: "/Notice",
      element: <Notice metaTitle='공지사항' key='3' />,
    },
    {// NoticeView
      path: "/Notice/View",
      element: <NoticeView metaTitle='공지사항 상세' key='3' />,
    },

    {// TextManagement
      path: "/TextManagement",
      element: <TextManagement metaTitle='텍스트 관리' key='4' />,
    },
    {// TextManagementView
      path: "/TextManagement/View",
      element: <TextManagementView metaTitle='상세' key='4' />,
    }
  ]
};

export default pageRoutes;
