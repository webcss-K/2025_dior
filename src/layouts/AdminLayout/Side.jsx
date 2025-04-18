import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

// antd
import Icon from '@mdi/react';
import { mdiCalendarMultiselect, mdiReceiptTextOutline, mdiCheckboxBlankBadgeOutline, mdiCogOutline, mdiArrowExpandLeft } from '@mdi/js';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const items=[
  {
    key: '1',
    icon: <Icon path={mdiCalendarMultiselect} size='18px' />,
    label: '예약 캘린더',
    to: '/ReservationCalendar',
  },
  {
    key: '2',
    icon: <Icon path={mdiReceiptTextOutline} size='18px' />,
    label: '예약 리스트',
    to: '/ReservationList',
  },
  {
    key: '3',
    icon: <Icon path={mdiCheckboxBlankBadgeOutline} size='18px' />,
    label: '공지사항',
    to: '/Notice',
  },
  {
    key: '4',
    icon: <Icon path={mdiCogOutline} size='18px' />,
    label: '텍스트 관리',
    to: '/TextManagement',
  },
];

const LayoutSide =()=> {
  let navigate = useNavigate();
  const count = useSelector((state) => state.PageInfoReducers.PageValue);
  const [selectedKeys, setSelectedKeys] = useState();

  const itemHandler = (e) => {
    const target = items[e.key-1];
    navigate(target.to);
  };

  useEffect(()=>{
    if(!count) return;
    setSelectedKeys(count.key);
  },[count]);
  return(
    <>
      <Sider width={260} collapsedWidth={95}>
        <div className="SiderTrigger">
          <Icon path={mdiArrowExpandLeft} size='0.875rem' />
        </div>
        <Menu
          mode="inline"
          theme="light"
          onClick={(e) => itemHandler(e)}
          defaultSelectedKeys={count.key}
          items={items}
          selectedKeys={selectedKeys}
        />
      </Sider>
    </>
  );
};

export default LayoutSide;