import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

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
              <h2 class="page-header-title mb-0">공지사항</h2>
            </div>
          </div>
          <div class="row">
            <div class="card">
              <div class="card-header">
                <div class="mb-2">
                  <form id="noticeSearchForm">
                    <div class="row align-items-center mb-3">
                      <label for="noticeTitle" class="col-sm-1 col-form-label">제목/내용</label>
                      <div class="col-sm-4">
                        <div class="input-group input-group-merge">
                          <input type="text" id="noticeTitle" class="form-control" />
                          <button type="button" id="textDelete" class="btn btn btn-outline-none btn-text-delete input-group-append input-group-text">
                            <i class="bi bi-x"></i></button                          >
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label for="" class="col-sm-1 col-form-label">언어</label>
                      <div class="col-sm-4 me-10">
                        <div class="tom-select-custom">
                          <select
                            class="js-select form-select"
                            autocomplete="off"
                            data-hs-tom-select-options='{
                                    "hideSearch": true
                                }'
                          >
                            <option value="1">전체</option>
                            <option value="2">국문</option>
                            <option value="3">영문</option>
                          </select>
                        </div>
                      </div>
                      <label for="" class="col-sm-1 col-form-label">노출여부</label>
                      <div class="col-sm-4">
                        <div class="tom-select-custom">
                          <select
                            class="js-select form-select"
                            autocomplete="off"
                            data-hs-tom-select-options='{
                                    "hideSearch": true
                                }'
                          >
                            <option value="1">전체</option>
                            <option value="2">노출</option>
                            <option value="3">비노출</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end">
                      <button type="button" class="btn btn-soft-info">검색</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-end mb-3">
                  <a href="./noticeAdd.html" class="btn btn-soft-primary">등록하기<i class="bi bi-plus-circle-dotted pt-1 ms-1"></i> </a>
                </div>
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
                            DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은 DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은 DIOR SEONGSU의 3월 예약 일정 안내
                            드립니다. 3월 예약 오픈 예정일은
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
                          <a href="./noticeDetail.html" class="text-body text-overflow"> DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은 </a>
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
                          <a href="./noticeDetail.html" class="text-body text-overflow"> DIOR SEONGSU의 3월 예약 일정 안내 드립니다. 3월 예약 오픈 예정일은 </a>
                        </td>
                        <td>영문</td>
                        <td class="text-danger">비노출</td>
                        <td>2023-02-20 12:23:12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-center border-0">
                <nav aria-label="Page navigation example">
                  <ul class="pagination mb-0">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span class="visually-hidden">Previous</span>
                      </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span class="visually-hidden">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Notice;