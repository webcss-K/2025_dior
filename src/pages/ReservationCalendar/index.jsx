import React from 'react';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const ReservationCalendar = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      예약캘린더
      <p><Link to="/ReservationCalendar/OpenSetting">오픈설정</Link></p>
      <p><Link to="/ReservationCalendar/Management">커리큘럼 관리</Link></p>
      <p><Link to="/ReservationCalendar/Add">커리큘럼 등록하기</Link></p>
    </>
  )
}

export default ReservationCalendar;