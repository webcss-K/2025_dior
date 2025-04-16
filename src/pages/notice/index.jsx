import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

// style
import Style from './index.module.scss';

// conponents
import SearchForm from 'components/SearchForm';
import ListForm from 'components/ListForm';
import Pagination from 'components/Pagination';

const columns = [
  {
    title: 'No',
    dataIndex: 'key'
  },
  {
    title: '제목',
    dataIndex: 'Title',
    width: 200
  },
  {
    title: '내용',
    dataIndex: 'Text',
    render: (text, record) => (
      <Link className={Style['TextLink']} to={`View/${record.key}`}>{record.Title}{text}</Link>
    )
  },
  {
    title: '언어',
    dataIndex: 'Language',
  },
  {
    title: '노출여부',
    dataIndex: 'DateVisit',
    render: (value) => (
      value ? <i className='DateVisitOn'>노출</i> : <i className='DateVisitOff'>비노출</i>
    ),
  },
  {
    title: '등록일',
    dataIndex: 'DateTime',
    width: 170
  }
]

const data = [
  {
    key: '1',
    Title: '3월 예약 일정 안내',
    Text: 'DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은',
    Language: '국문',
    DateVisit: true,
    DateTime: '2023-02-20 12:23:12'
  },
  {
    key: '2',
    Title: '4월 예약 일정 안내',
    Text: 'DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은',
    Language: '영문',
    DateVisit: false,
    DateTime: '2023-02-20 12:23:12'
  },
  {
    key: '3',
    Title: '5월 예약 일정 안내',
    Text: 'DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은',
    Language: '영문',
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