import React from 'react';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

const Login = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      로그인
    </>
  )
}

export default Login;