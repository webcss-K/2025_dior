import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import { useTranslation } from "react-i18next";
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userValue, numberTypeUp, numberTypeDown } from 'store/reducers/sampleReducers';

import {gsap, TweenMax, Cubic} from 'gsap';
import {CSSRulePlugin} from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

const Page01 =(props)=> {
  const count = useSelector((state) => state.sampleReducers);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const liStyle = {display: 'flex', width: '150px', height: '150px', margin: '0 10px 30px 10px', flexDirection: 'column', justifyContent: 'space-between'}
  const liImgStyle = {display: 'flex', height: '110px', justifyContent: 'center', alignItems: 'center', background: '#b7b7b9'}
  const liTextStyle = {display: 'flex', height: '30px', justifyContent: 'center', alignItems: 'center', background: '#b7b7b9'}

  const ApiCall = async () => {
    try {
      const axiosConfig = {
        headers:{
          "Content-Type": "application/json;charset=UTF-8"
        }
      }
      let _data = await axios.get("https://testUrl.com/listView",axiosConfig)
      setApiData(_data.data.list);
    }catch(e){
      console.log(e);
    }
  };

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
      setTitle('리스트 타이틀');
    }, 1000);
  });
  
  useEffect(()=>{ApiCall()},[]);

  return(
    <>
      <Helmet>
        <title>{props.metaTitle}</title>
      </Helmet>

      <h1>{props.metaTitle}</h1>
      <div>{t('text')}</div>

      <div style={{marginTop: '50px'}}>
        <h5>
          {loading ? (
            <Skeleton width={680} />
          ) : ( 
            title
          )}
        </h5>

        <ul style={{display: 'flex', width: '680px', flexWrap: 'wrap'}}>
          {apiData.map((data, index) => {
            return (
              <li key={index} style={liStyle}>
                {loading ? (
                  <Skeleton height={110} />
                ) : ( 
                  <div style={liImgStyle}>img box</div>
                )}
                {loading ? (
                  <Skeleton height={30} />
                ) : ( 
                  <div style={liTextStyle}>{data.title}</div>
                )}
              </li>
            )
          })}

          <li style={{width: '150px', height: '150px', margin: '0 10px 30px 10px'}}>
            {loading ? (
              <Skeleton width={150} height={150} circle={true} />
            ) : ( 
              <div style={{display: 'flex', width: '150px', height: '150px', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#b7b7b9'}}>text</div>
            )}
          </li>
        </ul>
      </div>

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
        <button
          onClick={() => dispatch(
            userValue({
              offair: props.offair ? props.offair : false,
              name: "홍길동",
              phoneCode: +82,
              phone: "01012341234".replace(/^0*/, ""),
              nextURL: "/reserve2" 
            }))
          }
        >userValue</button>
        <p>name: {count.userValue.name}</p>
        <p>phoneCode: {count.userValue.phoneCode}</p>
        <p>phone: {count.userValue.phone}</p>
        <p>nextURL: {count.userValue.nextURL}</p>
      </div>
    </>
  );
};

export default Page01;