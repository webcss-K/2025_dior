import React from 'react';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

import {gsap, TweenMax, Cubic} from 'gsap';
import {CSSRulePlugin} from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

const Page02view =()=> {
  let Navigate = useNavigate();

  return(
    <>
      Page02view
      <button onClick={()=>{Navigate(-1)}}>goBack</button>
    </>
  );
};

export default Page02view;