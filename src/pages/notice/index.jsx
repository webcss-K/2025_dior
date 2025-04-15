import React from 'react';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

// conponents
import SearchForm from 'components/SearchForm';
import ListForm from 'components/ListForm';
import Pagination from 'components/Pagination';

const sharedOnCell = (_, index) => {
  if (index === 1) {
    return { colSpan: 0 };
  }
  return {};
};

const columns = [
  {
    title: 'No',
    dataIndex: 'key'
  },
  {
    title: '제목',
    dataIndex: 'Title'
  },
  {
    title: '내용',
    dataIndex: 'Text'
  },
  {
    title: '노출여부',
    dataIndex: 'DateVisit'
  },
  {
    title: '등록일',
    dataIndex: 'DateTime'
  }
]

const data = [
  {
    key: '1',
    Title: '3월 예약 일정 안내',
    Text: 'DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은',
    DateVisit: true,
    DateTime: '2023-02-20 12:23:12'
  },
  {
    key: '2',
    Title: '4월 예약 일정 안내',
    Text: 'DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은',
    DateVisit: false,
    DateTime: '2023-02-20 12:23:12'
  },
  {
    key: '3',
    Title: '5월 예약 일정 안내',
    Text: 'DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은',
    DateVisit: true,
    DateTime: '2023-02-20 12:23:12'
  }
];

const Notice = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      <main class="main">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-end">
              <h2 class="page-header-title mb-0">{props.metaTitle}</h2>
            </div>
          </div>

          <div class="row">
            <div class="card">
              <SearchForm/>

              <ListForm columns={columns} data={data} />
              
              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Notice;