import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

const Calendar = (props) => {
  
  useEffect(()=>{
    console.log("deploy test");
  },[])
  
  return (
    <>
        <Helmet>
            <title>{props.metaTitle}</title>
        </Helmet>
        <div className={Style['member']}>
        </div>
        <div>reservationCalendar<br/><br/><br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>11<br/>111<br/></div>
    </>
  )
}

export default Calendar;