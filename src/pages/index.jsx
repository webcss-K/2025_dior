import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

// style
import Style from './index.module.scss';

const Main = (props) => {

  return (
    <>
        <Helmet>
            <title>{props.metaTitle}</title>
        </Helmet>

        <div className={Style['PageLink']}>
          <p><Link to="/Login">로그인</Link></p>
          <p><Link to="/ReservationCalendar">예약 캘린더</Link></p>
          <p> - <Link to="/ReservationCalendar/Management">커리큘럼 관리</Link></p>
          <p> - <Link to="/ReservationCalendar/Add">커리큘럼 등록하기</Link></p>
          <p> - <Link to="/ReservationCalendar/OpenSetting">오픈설정</Link></p>
          
          <p><Link to="/ReservationList">예약 리스트</Link></p>

          <p><Link to="/Notice">공지사항</Link></p>
          <p> - <Link to="/Notice/View">공지사항 상세</Link></p>

          <p><Link to="/TextManagement">텍스트 관리</Link></p>
          <p> - <Link to="/TextManagement/View">텍스트 상세</Link></p>
        </div>
    </>
  )
}

export default Main;