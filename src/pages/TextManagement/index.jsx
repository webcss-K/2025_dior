import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

// style
import Style from './index.module.scss';

const TextManagement = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      텍스트관리
    </>
  )
}

export default TextManagement;