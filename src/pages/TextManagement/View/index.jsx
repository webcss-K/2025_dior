import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const TextManagementView = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      텍스트 상세
    </>
  )
}

export default TextManagementView;