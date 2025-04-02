import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const NoticeView = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      공지사항 상세
    </>
  )
}

export default NoticeView;