import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Nav = React.lazy(() => import('layouts/CommonLayout/Nav'));

const LayoutIndex =({ layout = 'blank' })=> {
  return(
    <>
      {(layout === 'blank' || layout === 'samplePage') && (
        <Suspense fallback={<div>loading samplePage...</div>}>
          <Nav />
          <Outlet />
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