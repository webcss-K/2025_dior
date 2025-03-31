import React from 'react';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

// img
import excel_icon from 'asset/img/excel-icon.svg';

// components
import Tables from 'components/Table';

const Calendar = (props) => {
  
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      <main class="main">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-end">
              <h2 class="page-header-title mb-0">예약 리스트</h2>
            </div>
          </div>
          <div class="row">
            <div class="card">
              <div class="card-header">
                <div class="mb-2">
                  <form id="reservationSearchForm">
                    <div class="row align-items-center mb-3">
                      <label for="" class="col-sm-1 col-form-label">예약 종류</label>
                      <div class="col-sm-4 me-5">
                        <div class="tom-select-custom">
                          <select
                            class="js-select form-select"
                            autocomplete="off"
                            data-hs-tom-select-options='{
                                "hideSearch": true
                            }'
                          >
                            <option value="1">전체</option>
                            <option value="2">도슨트 프로그램</option>
                            <option value="3">부띠크 방문</option>
                            <option value="4">카페 디올</option>
                          </select>
                        </div>
                      </div>
                      <label for="" class="col-sm-1 col-form-label">예약 상태</label>
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
                            <option value="2">예약</option>
                            <option value="3">취소</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center mb-3">
                      <label for="" class="col-sm-1 col-form-label">방문 일시</label>
                      <div class="col-sm-4 me-5">
                        <div class="input-group">
                          <input id="datepicker" type="text" class="js-daterangepicker form-control daterangepicker-custom-input" placeholder="방문 일시를 선택해주세요" />
                          <button type="button" class="btn btn-white" onclick="$('#datepicker').data('daterangepicker').toggle();">
                            <i class="bi-calendar-week me-1"></i>
                          </button>
                        </div>
                      </div>
                      <label for="" class="col-sm-1 col-form-label">예약 일시</label>
                      <div class="col-sm-4 me-5">
                        <div class="input-group">
                          <input type="text" id="datepickerTime" class="js-daterangepicker-time form-control daterangepicker-custom-input" />
                          <button type="button" class="btn btn-white" onclick="$('#datepickerTime').data('daterangepicker').toggle();">
                            <i class="bi-calendar-week me-1"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label for="inputName" class="col-sm-1 col-form-label">이름</label>
                      <div class="col-sm-4 me-5">
                        <div class="input-group input-group-merge">
                          <input id="inputName" type="text" class="form-control" />
                          <button type="button" id="nameDelete" class="btn btn btn-outline-none btn-text-delete input-group-append input-group-text">
                            <i class="bi bi-x"></i></button>
                        </div>
                      </div>
                      <label for="" class="col-sm-1 col-form-label">연락처</label>
                      <div class="col-sm-4">
                        <div class="input-group input-group-merge">
                          <input id="inputPhone" type="text" class="form-control" />
                          <button type="button" id="numDelete" class="btn btn btn-outline-none btn-text-delete input-group-append input-group-text">
                            <i class="bi bi-x"></i></button>
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
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="">( <span>1</span> / <span>3</span> )</div>
                  <button type="button" class="btn btn-white"><img class="avatar avatar-xss avatar-4x3 me-2" src={excel_icon} alt="excel" /> Excel Download</button>
                </div>
                <Tables />
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

export default Calendar;