import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

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
        </div>
      </main>
    </>
  )
}

export default Calendar;