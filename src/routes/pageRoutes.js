import React from 'react';
import LayoutIndex from 'layouts';
import { lazy } from 'react';

const ReservationCalendar = lazy(() => import('pages/ReservationCalendar'));
const ReservationCalendarAdd = lazy(() => import('pages/ReservationCalendar/Add'));
const ReservationCalendarManagement = lazy(() => import('pages/ReservationCalendar/Management'));
const ReservationCalendarOpenSetting = lazy(() => import('pages/ReservationCalendar/OpenSetting'));

const ReservationList = lazy(() => import('pages/ReservationList'));
const Notice = lazy(() => import('pages/Notice'));
const NoticeAdd = lazy(() => import('pages/Notice/Add'));
const NoticeDetail = lazy(() => import('pages/Notice/Detail'));

const TextManagement = lazy(() => import('pages/TextManagement'));
const TextManagementEdit = lazy(() => import('pages/TextManagement/Edit'));
const TextManagementReservation = lazy(() => import('pages/TextManagement/Reservation'));

// ==============================|| AUTH ROUTING ||============================== //

const pageRoutes = {
  path: '/',
  element: <LayoutIndex layout="basic" />,
  children: [
    {// Main > ReservationCalendar
      path: '/ReservationCalendar',
      element: <ReservationCalendar metaTitle='예약 캘린더' />,
    },
    {// Main > ReservationCalendarAdd
      path: '/ReservationCalendar/Add',
      element: <ReservationCalendarAdd metaTitle='커리큘럼 등록하기' />,
    },
    {// Main > ReservationCalendarManagement
      path: '/ReservationCalendar/Management',
      element: <ReservationCalendarManagement metaTitle='커리큘럼 관리' />,
    },
    {// Main > ReservationCalendarOpenSetting
      path: '/ReservationCalendar/OpenSetting',
      element: <ReservationCalendarOpenSetting metaTitle='오픈 설정' />,
    },

    {// ReservationList
      path: "/ReservationList",
      element: <ReservationList metaTitle='예약 리스트' />,
    },
    {// Notice
      path: "/Notice",
      element: <Notice metaTitle='공지사항' />,
    },
    {// NoticeAdd
      path: "/Notice/Add",
      element: <NoticeAdd metaTitle='공지사항 등록하기' />,
    },
    {// NoticeDetail
      path: "/Notice/Detail",
      element: <NoticeDetail metaTitle='공지사항 상세' />,
    },

    {// TextManagement
      path: "/TextManagement",
      element: <TextManagement metaTitle='텍스트 관리' />,
    },
    {// TextManagementEdit
      path: "/TextManagement/Edit",
      element: <TextManagementEdit metaTitle='팝업문구' />,
    },
    {// TextManagementReservation
      path: "/TextManagement/Reservation",
      element: <TextManagementReservation metaTitle='예약안내문구' />,
    }
  ]
};

export default pageRoutes;
