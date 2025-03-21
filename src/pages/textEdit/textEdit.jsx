import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

const Main = (props) => {
  
  useEffect(()=>{
    console.log("deploy test");
  },[])
  
  return (
    <>
        <Helmet>
            <title>{props.metaTitle}</title>
        </Helmet>
        <div className={Style['member']}>
        </div>
        <div>textEdit</div>
    </>
  )
}

export default Main;