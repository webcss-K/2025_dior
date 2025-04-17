import React from 'react';
import {Helmet} from "react-helmet";
import { useParams } from 'react-router-dom';

// style
import './index.module.scss';

const NoticeView = (props) => {
  const { id } = useParams();

  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      공지사항 상세: {id}
    </>
  )
}

export default NoticeView;