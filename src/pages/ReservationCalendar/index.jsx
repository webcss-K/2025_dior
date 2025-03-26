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

        <div className='title'>{props.metaTitle}</div>
        <div>
          d
        </div>
    </>
  )
}

export default Calendar;