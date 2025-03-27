import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const Calendar = (props) => {
  
  return (
    <>
        <Helmet>
            <title>{props.metaTitle}</title>
        </Helmet>

        <div className='title'>{props.metaTitle}</div>
    </>
  )
}

export default Calendar;