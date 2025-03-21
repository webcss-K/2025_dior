import React from 'react';
import {Helmet} from "react-helmet";
import { useTranslation } from "react-i18next";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { numberTypeUp, numberTypeDown } from 'store/reducers/sampleReducers';

import {gsap, TweenMax, Cubic} from 'gsap';
import {CSSRulePlugin} from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

const Page02 =(props)=> {
  const count = useSelector((state) => state.sampleReducers);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  return(
    <>
      <Helmet>
        <title>{props.metaTitle}</title>
      </Helmet>
      
      <h1>{props.metaTitle}</h1>
      <div>{t('text')}</div>
      <p><Link to="/Page02/view">실시간 예약</Link></p>

      <div style={{height:'300px', background:'#ccc'}}>
        <p>stringType: {count.nameType}</p>
        <p>numberType: {count.numberType}</p>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(numberTypeUp())}
        >Up</button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(numberTypeDown())}
        >Down</button>
      </div>
    </>
  );
};

export default Page02;