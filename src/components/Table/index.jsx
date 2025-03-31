import React from 'react';

// style
import Style from './index.module.scss';

const Table = (props) => {
  return (
    <>
      <div class="table-responsive datatable-custom">
        <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
          <thead class="thead-light">
            <tr>
              <th>No</th>
              <th>이름</th>
              <th>연락처</th>
              <th>예약종류</th>
              <th>방문 일</th>
              <th>방문 시간</th>
              <th>방문인원</th>
              <th>예약 일시</th>
              <th>취소 일시</th>
              <th>예약 상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
              <td>도슨튼 프로그램</td>
              <td>2023-03-08</td>
              <td>11:00</td>
              <td>2</td>
              <td>2023-03-01 13:00:55</td>
              <td></td>
              <td>예약</td>
            </tr>
            <tr>
              <td>10</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
              <td>도슨튼 프로그램</td>
              <td>2023-03-08</td>
              <td>11:00</td>
              <td>2</td>
              <td>2023-03-01 13:00:55</td>
              <td class="text-danger">2023-03-01 13:00:55</td>
              <td class="text-danger">취소</td>
            </tr>
            <tr>
              <td>10</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
              <td>도슨튼 프로그램</td>
              <td>2023-03-08</td>
              <td>11:00</td>
              <td>2</td>
              <td>2023-03-01 13:00:55</td>
              <td></td>
              <td>예약</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table;