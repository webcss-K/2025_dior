import React from 'react';

// style
import Style from './index.module.scss';

// antd
import { Table } from "antd";

const ListForm = (props) => {
  return (
    <>
      <div class="card-body">
        <div class="d-flex justify-content-end mb-3">
          <a href="./noticeAdd.html" class="btn btn-soft-primary">등록하기<i class="bi bi-plus-circle-dotted pt-1 ms-1"></i> </a>
        </div>

        <Table 
        className={Style['TableForm']}
        columns={props.columns} 
        dataSource={props.data}
        bordered 
        pagination={{ position: ['bottomCenter'] }} 
       />
        <div class="table-responsive datatable-custom">
          <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
            <thead class="thead-light">
              <tr>
                <th>No</th>
                <th>제목</th>
                <th>내용</th>
                <th>언어</th>
                <th>노출여부</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50</td>
                <td>
                  <a href="./noticeDetail.html" class="text-body"> 3월 예약 일정 안내 </a>
                </td>
                <td>
                  <a href="./noticeDetail.html" class="text-body text-overflow">
                    DIOR SEONGSU의 3월 예약 일정 안내 드립니다.
                  </a>
                </td>
                <td>국문</td>
                <td>노출</td>
                <td>2023-02-20 12:23:12</td>
              </tr>
              <tr>
                <td>49</td>
                <td>
                  <a href="./noticeDetail.html" class="text-body"> 3월 예약 일정 안내 </a>
                </td>
                <td>
                  <a href="./noticeDetail.html" class="text-body text-overflow">
                    DIOR SEONGSU의 3월 예약 일정 안내 드립니다.
                  </a>
                </td>
                <td>영문</td>
                <td class="text-danger">비노출</td>
                <td>2023-02-20 12:23:12</td>
              </tr>
              <tr>
                <td>48</td>
                <td>
                  <a href="./noticeDetail.html" class="text-body"> 3월 예약 일정 안내 </a>
                </td>
                <td>
                  <a href="./noticeDetail.html" class="text-body text-overflow">
                    DIOR SEONGSU의 3월 예약 일정 안내 드립니다.
                  </a>
                </td>
                <td>영문</td>
                <td class="text-danger">비노출</td>
                <td>2023-02-20 12:23:12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListForm;