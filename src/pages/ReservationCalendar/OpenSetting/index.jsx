import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const ReservationCalendarOpenSetting = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      <main class="main">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-center">
              <button type="button" class="btn btn-ghost btn-icon btn-lg w-0 me-2" onclick="location.href = './reservationCalendar.html'">
                <i class="bi-chevron-left"></i>
              </button>
              <h2 class="page-header-title mb-0 w-25">오픈 설정</h2>
            </div>
          </div>
          <div class="row">
            <div class="text-center mb-3">
              <h2 class="h2 mb-4">예약 오픈이&nbsp;<span class="text-info">비활성화</span>&nbsp;되었습니다.</h2>
              <p class="text-body fs-4">최근 업데이트&nbsp;<i class="bi bi-clock-history"></i>&nbsp;<span class="text-dark">2023.03.02 17:30:50</span></p>
            </div>
            <div class="card">
              <form action="">
                <div class="card-body">
                  <div class="row mb-4">
                    <label for="" class="col-2 col-form-label">오픈 월<span class="critical-items">*</span> </label>
                    <div class="col-sm-4">
                      <div class="flatpickr">
                        <div class="input-group">
                          <input type="text" class="flatpickr-custom-form-control form-control" data-input />
                          <button type="button" class="btn btn-white" title="toggle" data-toggle>
                            <i class="bi-calendar-week me-1"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="noticeTitle" class="col-2 col-form-label">예약 설정<span class="critical-items">*</span> </label>
                    <div class="col-sm-4">
                      <div class="input-group">
                        <input type="text" id="reservationSet" class="form-control daterangepicker-custom-input" />
                        <button type="button" class="btn btn-white" onclick="$('#reservationSet').data('daterangepicker').toggle();">
                          <i class="bi-calendar-week me-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-end">
                  <button type="button" class="btn btn-outline-danger me-2">취소</button>
                  <button type="submit" id="noticeAddBtn" class="btn btn-primary">설정하기</button>
                </div>
              </form>
            </div>
            <div class="card mt-5">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h3 class="h3">히스토리</h3>
                  <div>( <span>1</span> / <span>1</span> )</div>
                </div>
                <div class="table-responsive datatable-custom">
                  <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                    <thead class="thead-light">
                      <tr>
                        <th>No</th>
                        <th>오픈 월</th>
                        <th>예약 설정 날짜</th>
                        <th>업데이트 날짜</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3</td>
                        <td>2023-03</td>
                        <td>2023-02-24 12:00 ~ 2023-03-16 12:00</td>
                        <td>2023-03-02 15:37:27</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2023-02</td>
                        <td>2023-01-24 12:00 ~ 2023-02-16 12:00</td>
                        <td>2023-03-02 15:37:27</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2023-01</td>
                        <td>2023-12-24 12:00 ~ 2023-01-16 12:00</td>
                        <td>2023-03-02 15:37:27</td>
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

export default ReservationCalendarOpenSetting;