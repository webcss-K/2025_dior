import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const Notice = (props) => {
  
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      공지사항
    </>
  )
}

export default Notice;