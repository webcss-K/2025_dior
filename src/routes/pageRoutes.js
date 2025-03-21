import React from 'react';
import LayoutIndex from 'layouts';
import { lazy } from 'react';

const Login = lazy(() => import('pages/login'));
const Calendar = lazy(() => import('pages/calendar'));
  const Management = lazy(() => import('pages/calendar/management'));
  const OpenSetting = lazy(() => import('pages/calendar/openSetting'));
  const CurriculumAdd = lazy(() => import('pages/calendar/curriculumAdd'));
const Reservation = lazy(() => import('pages/reservation'));
const Notice = lazy(() => import('pages/notice'));
  const NoticeDetail = lazy(() => import('pages/notice/noticeDetail'));
  const NoticeAdd = lazy(() => import('pages/notice/noticeAdd'));
const TextEdit = lazy(() => import('pages/textEdit'));
  const TextEditReservation = lazy(() => import('pages/textEdit/textEditReservation'));
  const TextEditModify = lazy(() => import('pages/textEdit/textEdit'));

// ==============================|| AUTH ROUTING ||============================== //

const pageRoutes = {
  path: '/',
  element: <LayoutIndex layout="samplePage" />,
  children: [
    {// Main > Calendar
      path: '/',
      element: <Calendar metaTitle='예약 캘린더' />,
    },
    {// Login
      path: '/login',
      element: <Login metaTitle='로그인' />,
    },
    {// Calendar
      path: "/calendar",
      element: <Calendar metaTitle='예약 캘린더' />,
    },
    {// Management
      path: '/calendar',
      element: <Management metaTitle='예약 캘린더' />,
    },
    {// OpenSetting
      path: '/calendar',
      element: <OpenSetting metaTitle='예약 캘린더' />,
    },
    {// CurriculumAdd
      path: '/calendar',
      element: <CurriculumAdd metaTitle='예약 캘린더' />,
    },
    
    {// reservation
      path: "/reservation",
      element: <Reservation metaTitle='예약 리스트' />,
    },

    {// Notice
      path: "/notice",
      element: <Notice metaTitle='공지사항' />,
    },
    {// NoticeDetail
      path: "/notice",
      element: <NoticeDetail metaTitle='공지사항' />,
    },
    {// NoticeAdd
      path: "/NoticeAdd",
      element: <NoticeAdd metaTitle='공지사항' />,
    },

    {// TextEdit
      path: "/textEdit",
      element: <TextEdit metaTitle='텍스트 관리' />,
    },
    {// TextEditReservation
      path: "/textEdit",
      element: <TextEditReservation metaTitle='텍스트 관리' />,
    },
    {// TextEditModify
      path: "/textEdit",
      element: <TextEditModify metaTitle='텍스트 관리' />,
    }
  ]
};

export default pageRoutes;
