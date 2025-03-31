import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// mui
import { Layout } from 'antd';

const { Content } = Layout;

const LayoutHeader = React.lazy(() => import('layouts/CommonLayout/Header'));
const LayoutSide = React.lazy(() => import('layouts/CommonLayout/Side'));

const LayoutIndex =({ layout = 'blank' })=> {
  return(
    <>
      {(layout === 'blank' || layout === 'basic') && (
        <Suspense fallback={<div>loading DIOR...</div>}>
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
        <Suspense fallback={<div>loading DIOR...</div>}>
          <Layout className='basicLayout'>
            <Content className='contents'>
              <Outlet />
            </Content>
          </Layout>
        </Suspense>
      )}
      {(layout === 'blank' || layout === 'defaultProduct') && (
        <Suspense fallback={<div>loading defaultProduct...</div>}>
          <Outlet />
        </Suspense>
      )}
      {layout === 'blank' && <Outlet />}
    </>
  );
};

export default LayoutIndex;