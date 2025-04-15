import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './layout.scss';
// antd
import { Layout } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// store
import { PageValue } from 'store/reducers/PageInfoReducers';

const { Content } = Layout;

const LayoutHeader = React.lazy(() => import('layouts/AdminLayout/Header'));
const LayoutSide = React.lazy(() => import('layouts/AdminLayout/Side'));

const LayoutIndex =({ layout = 'blank' })=> {
  const dispatch = useDispatch();
  let location = useLocation();

  const pageChangeFuntion =()=>{
    if(!location.pathname) return;
    const locationHook = location.pathname.split('/');
    switch(locationHook[1]){
      case "Login":
        dispatch(PageValue({ key:"0" }));
        return;
      case 'ReservationCalendar': 
        dispatch(PageValue({ key:"1" }));
        return;
      case 'ReservationCalendarAdd': 
        dispatch(PageValue({ key:"1" }));
        return;
      case 'ReservationCalendarManagement': 
        dispatch(PageValue({ key:"1" }));
        return;
      case 'ReservationCalendarOpenSetting': 
        dispatch(PageValue({ key:"1" }));
        return;
      case 'ReservationList': 
        dispatch(PageValue({ key:"2" }));
        return;
      case 'Notice': 
        dispatch(PageValue({ key:"3" }));
        return;
      case 'NoticeView': 
        dispatch(PageValue({ key:"3" }));
        return;
      case 'TextManagement': 
        dispatch(PageValue({ key:"4" }));
        return;
      case 'TextManagementView': 
        dispatch(PageValue({ key:"4" }));
        return;
      default:
        dispatch(PageValue({ key:"0" }));
        return ;
    }
  }
  useEffect(pageChangeFuntion,[location.pathname]);

  return(
    <>
      {(layout === 'blank' || layout === 'basic') && (
        <Suspense fallback={
          <div className='loding'>
            <LoadingOutlined className='LoadingOutlined' />
            <p>loading DIOR...</p>
          </div>
          }>
          <Layout className='basicLayout'>
            <LayoutSide />

            <Layout className='contentLayout'>
              <LayoutHeader />

              <Content className='contents'>
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </Suspense>
      )}
      {(layout === 'blank' || layout === 'login') && (
        <Suspense fallback={
          <div className='loding'>
            <LoadingOutlined className='LoadingOutlined' />
            <p>loading DIOR...</p>
          </div>
          }>
          <Layout className='basicLayout'>
            <Content className='contents'>
              <Outlet />
            </Content>
          </Layout>
        </Suspense>
      )}
      {(layout === 'blank' || layout === 'defaultProduct') && (
        <Suspense fallback={
          <div className='loding'>
            <LoadingOutlined className='LoadingOutlined' />
            <p>loading DIOR...</p>
          </div>
          }>
          <Outlet />
        </Suspense>
      )}
      {layout === 'blank' && <Outlet />}
    </>
  );
};

export default LayoutIndex;