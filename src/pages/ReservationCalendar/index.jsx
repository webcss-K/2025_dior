import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

// components
import Calendar from 'components/Calendar';

const ReservationCalendar = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      <main class="main">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-end">
              <h2 class="page-header-title mb-0">예약 캘린더</h2>
            </div>
          </div>
          <div class="row align-items-sm-center justify-content-between mb-4">
            <div class="col-sm-auto">
              <button type="button" class="btn btn-soft-info"><i class="bi bi-download me-2"></i>일일 리포트</button>
            </div>
            <div class="col-auto d-flex align-items-center">
              <button type="button" class="btn btn-outline-secondary me-2 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#openSetModal">
                오픈 설정<span class="legend-indicator bg-success ms-1 me-0"></span>
              </button>
              <a href="./curriculumManagement.html" class="btn btn-soft-secondary me-2">커리큘럼 관리<i class="bi bi-gear-fill ms-1"></i> </a>
              <a href="./curriculumAdd.html" type="button" class="btn btn-soft-primary">커리큘럼 등록<i class="bi bi-plus-circle ms-1"></i> </a>
            </div>
          </div>
          <div class="row justify-content-between align-items-sm-center mb-4">
            <div class="col-lg-5 mb-2 mb-lg-0">
              <div class="d-flex align-items-center">
                <button type="button" class="btn btn-white me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-fc-today>Today</button>

                <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm btn-no-focus rounded-circle me-1" data-fc-prev-month>
                  <i class="bi-chevron-left"></i>
                </button>

                <button type="button" class="btn btn-ghost-secondary btn-icon btn-sm btn-no-focus rounded-circle ms-1" data-fc-next-month>
                  <i class="bi-chevron-right"></i>
                </button>

                <div class="ms-3">
                  <h4 class="h3 mb-0" data-fc-title>2023 03</h4>
                </div>
              </div>
            </div>
            <div class="col-sm-auto">
              <div class="btn-group btn-group-segment" role="group" aria-label="Basic segment styles example">
                <input type="radio" class="btn-check" name="btnGroupSegmentRadio" id="btnGroupSegmentRadioOption1" autocomplete="off" value="dayGridMonth" checked />
                <label class="btn btn-sm" for="btnGroupSegmentRadioOption1">월간</label>

                <input type="radio" class="btn-check" name="btnGroupSegmentRadio" id="btnGroupSegmentRadioOption2" autocomplete="off" value="timeGridDay" />
                <label class="btn btn-sm" for="btnGroupSegmentRadioOption2">일간</label>
              </div>
            </div>
          </div>

          <div id="js-fullcalendar" class="js-fullcalendar fullcalendar-custom"></div>
          <Calendar />
        </div>
      </main>

      <div class="modal fade" id="openSetModal" tabindex="-1" rol="dialog" aria-labelledby="openSetModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <form action="" id="openSetForm">
              <div class="modal-header nav-vertical">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <h5 class="modal-title h1" id="openSetModalLabel">오픈 설정</h5>
              </div>
              <div class="modal-body mt-5">
                <p class="text-center text-muted fs-4 text-center"><i class="bi bi-exclamation-circle"></i>&nbsp;오픈 설정을 위해 패스워드를 입력해주세요</p>
                <label for="openSetPassword" class="form-label mt-5">Password</label>
                <input type="text" id="openSetPassword" class="form-control" />
                <p class="text-danger mt-3">비밀번호를 확인해주세요.</p>
              </div>
              <div class="modal-footer justify-content-center border-0">
                <button type="submit" id="openSetbtn" class="btn btn-primary" disabled>확인</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="modal fade" id="programModal" tabindex="-1" role="dialog" aria-labelledby="programModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header justify-content-center">
              <h5 class="modal-title h3" id="programModalLabel"><span class="program-name">도슨트 프로그램</span>예약자</h5>
            </div>
            <div class="modal-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="col">( <span>1 </span>/<span> 2</span> )</div>
                <div class="col-sm-auto">
                  <button class="btn btn-outline-secondary btn-icon btn-sm btn-no-focus me-1" disabled>
                    <i class="bi-chevron-left"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-icon btn-sm btn-no-focus ms-1">
                    <i class="bi-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                  <thead class="thead-light">
                    <tr>
                      <th>No</th>
                      <th>이름</th>
                      <th>연락처</th>
                      <th>예약종류</th>
                      <th>예약일자</th>
                      <th>예약시간</th>
                      <th>방문인원</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10</td>
                      <td>홍길동</td>
                      <td>010-1234-5678</td>
                      <td>도슨트 프로그램</td>
                      <td>2023-03-06</td>
                      <td>11:00</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>홍길동</td>
                      <td>010-1234-5678</td>
                      <td>도슨트 프로그램</td>
                      <td>2023-03-06</td>
                      <td>11:00</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>홍길동</td>
                      <td>010-1234-5678</td>
                      <td>도슨트 프로그램</td>
                      <td>2023-03-06</td>
                      <td>11:00</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-white" data-bs-dismiss="modal">닫기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReservationCalendar;