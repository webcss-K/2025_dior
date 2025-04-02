import React from 'react';
import { useNavigate } from "react-router-dom";

// mui
import Icon from '@mdi/react';
import { mdiLogoutVariant } from '@mdi/js';
import { Layout, Button } from 'antd';

const { Header } = Layout;

const LayoutHeader =()=> {
  let navigate = useNavigate();

  const CurriculumManagement =()=> {
    navigate("/Login");
  };

  return(
    <>
      <Header>
        <h1>DIOR CMS</h1>
        <Button className='btnLogout' onClick={CurriculumManagement}>
          <Icon path={mdiLogoutVariant} size='0.875rem' />
          로그아웃
        </Button>
      </Header>
    </>
  );
};

export default LayoutHeader;