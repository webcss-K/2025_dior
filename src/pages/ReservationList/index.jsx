import React from 'react';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

const ReservationList = (props) => {
  
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      예약리스트
    </>
  )
}

export default ReservationList;