import React from 'react';
import { useTranslation } from "react-i18next";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

import {gsap, TweenMax, Cubic} from 'gsap';
import {CSSRulePlugin} from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

const Nav =()=> {
  const { t, i18n } = useTranslation();
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')
  const liStyle = {display:'inline-block', padding:'0 20px'}
  return(
    <>
      <nav style={{padding:'20px', borderBottom:'1px solid #ddd'}}>
        <ul>
          <li style={liStyle}><Link to="Page01">Page01</Link></li>
          <li style={liStyle}><Link to="Page02">Page02</Link></li>
        </ul>
        <div style={{position: 'absolute', right: '20px', top: '15px'}}>
          <span style={{paddingRight:'20px'}}>language : {i18n.language}</span>
          <button onClick={changelanguageToKo}>Korean</button>
          <button onClick={changelanguageToEn}>English</button>  
        </div>
      </nav>
    </>
  );
};

export default Nav;