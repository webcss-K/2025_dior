import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const ReservationCalendarAdd = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      커리큘럼 등록하기
    </>
  )
}

export default ReservationCalendarAdd;