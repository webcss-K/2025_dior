import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

const TextManagement = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      텍스트관리
      
      <div className='PageLink'>
        <p>- <Link to="/TextManagement/View">View</Link></p>
      </div>
    </>
  )
}

export default TextManagement;