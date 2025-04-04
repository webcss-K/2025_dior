import React from 'react';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

const Notice = (props) => {
  
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      공지사항

      <div className='PageLink'>
        <p>- <Link to="/Notice/View">View</Link></p>
      </div>
    </>
  )
}

export default Notice;