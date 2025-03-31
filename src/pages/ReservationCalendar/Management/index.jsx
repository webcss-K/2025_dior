import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const ReservationCalendarManagement = (props) => {
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
              <h2 class="page-header-title mb-0 w-25">커리큘럼 관리</h2>
            </div>
          </div>
          <form action="">
            <div class="row justify-content-lg-center">
              <div class="text-center col-lg-10">
                <ul class="nav nav-segment nav-pills mb-7" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="nav-one-eg1-tab" href="#nav-one-eg1" data-bs-toggle="pill" data-bs-target="#nav-one-eg1" role="tab" aria-controls="nav-one-eg1" aria-selected="true"
                      >도슨트 프로그램</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="nav-two-eg1-tab" href="#nav-two-eg1" data-bs-toggle="pill" data-bs-target="#nav-two-eg1" role="tab" aria-controls="nav-two-eg1" aria-selected="false"
                      >부띠크 방문</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-three-eg1-tab"
                      href="#nav-three-eg1"
                      data-bs-toggle="pill"
                      data-bs-target="#nav-three-eg1"
                      role="tab"
                      aria-controls="nav-three-eg1"
                      aria-selected="false"
                      >CAFÉ DIOR</a
                    >
                  </li>
                </ul>
              </div>
              <div class="card col-lg-10">
                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="nav-one-eg1" role="tabpanel" aria-labelledby="nav-one-eg1-tab">
                      <div class="row justify-content-between">
                        <div class="col-lg-auto mt-4">
                          <input type="text" class="js-flatpickr d-none" placeholder="Select dates" />
                        </div>
                        <div class="col-lg-4">
                          <p class="h5">예약 시간 리스트&nbsp;<i class="bi bi-alarm"></i></p>
                          <div class="card">
                            <div class="card-body">
                              <div
                                class="js-add-field row mb-4"
                                data-hs-add-field-options='{
                                    "template": "#addTimeTemplate",
                                    "container": "#addTimeFieldContainer",
                                    "defaultCreated": 0
                                  }'
                              >
                                <div class="col time-input-box">
                                  <div class="time-input-wrap">
                                    <input
                                      type="button"
                                      class="js-flatpickr-time flatpickr-custom btn btn-white"
                                      placeholder="00:00"
                                      data-hs-flatpickr-options='{
                                          "noCalendar": true,
                                          "enableTime": true,
                                          "dateFormat": "H:i",
                                          "minTime": "10:00",
                                          "maxTime": "20:00",
                                          "time_24hr": true
                                        }'
                                    />
                                  </div>
                                  <div class="time-input-wrap">
                                    <button type="button" class="btn btn-outline-secondary">14:00</button>
                                    <span class="legend-indicator bg-danger"></span>
                                  </div>
                                  <div class="time-input-wrap">
                                    <button type="button" class="btn btn-soft-secondary">15:00</button>
                                    <span class="legend-indicator bg-danger"></span>
                                  </div>

                                  <div id="addTimeFieldContainer"></div>
                                </div>
                                <div class="col-sm-auto">
                                  <a href="javascript:;" class="form-link fs-4 mt-2">
                                    <i class="bi-plus-circle me-1"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 mt-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="mb-3">
                                <label class="form-label" for="">예약 가능한 팀 수<span class="critical-items">*</span></label>
                                <input type="number" id="" class="form-control" />
                              </div>
                              <div class="mb-3">
                                <label class="form-label" for="">팀당 가능한 인원 수<span class="critical-items">*</span></label>
                                <input type="number" id="" class="form-control" />
                              </div>
                              <div class="form-check mb-3">
                                <label class="form-label" for="checkReservation1">예약 가능 여부</label>
                                <input type="checkbox" id="checkReservation1" class="form-check-input" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-two-eg1" role="tabpanel" aria-labelledby="nav-two-eg1-tab">
                      <div class="row justify-content-between">
                        <div class="col-lg-auto mt-4">
                          <input type="text" class="js-flatpickr d-none" placeholder="Select dates" />
                        </div>
                        <div class="col-lg-4">
                          <p class="h5">예약 시간 리스트&nbsp;<i class="bi bi-alarm"></i></p>
                          <div class="card">
                            <div class="card-body">
                              <div
                                class="js-add-field row mb-4"
                                data-hs-add-field-options='{
                                    "template": "#addTimeTemplate",
                                    "container": "#addTimeFieldContainer",
                                    "defaultCreated": 0
                                  }'
                              >
                                <div class="col time-input-box">
                                  <div class="time-input-wrap">
                                    <input
                                      type="button"
                                      class="js-flatpickr-time flatpickr-custom btn btn-white"
                                      placeholder="00:00"
                                      data-hs-flatpickr-options='{
                                        "noCalendar": true,
                                        "enableTime": true,
                                        "dateFormat": "H:i",
                                        "minTime": "10:00",
                                        "maxTime": "20:00",
                                        "time_24hr": true
                                      }'
                                    />
                                  </div>
                                  <div class="time-input-wrap">
                                    <button type="button" class="btn btn-outline-secondary">14:00</button>
                                    <span class="legend-indicator bg-danger"></span>
                                  </div>
                                  <div class="time-input-wrap">
                                    <button type="button" class="btn btn-outline-secondary">16:00</button>
                                    <span class="legend-indicator bg-danger"></span>
                                  </div>

                                  <div id="addTimeFieldContainer"></div>
                                </div>
                                <div class="col-sm-auto">
                                  <a href="javascript:;" class="form-link fs-4 mt-2">
                                    <i class="bi-plus-circle me-1"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 mt-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="mb-3">
                                <label class="form-label" for="">예약 가능한 팀 수<span class="critical-items">*</span></label>
                                <input type="number" id="" class="form-control" />
                              </div>
                              <div class="mb-3">
                                <label class="form-label" for="">팀당 가능한 인원 수<span class="critical-items">*</span></label>
                                <input type="number" id="" class="form-control" />
                              </div>
                              <div class="form-check mb-3">
                                <label class="form-label" for="checkReservation2">예약 가능 여부</label>
                                <input type="checkbox" id="checkReservation2" class="form-check-input" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-three-eg1" role="tabpanel" aria-labelledby="nav-three-eg1-tab">
                      <div class="row justify-content-between">
                        <div class="col-lg-auto mt-4">
                          <input type="text" class="js-flatpickr d-none" placeholder="Select dates" />
                        </div>
                        <div class="col-lg-4">
                          <p class="h5">예약 시간 리스트&nbsp;<i class="bi bi-alarm"></i></p>
                          <div class="card">
                            <div class="card-body">
                              <div
                                class="js-add-field row mb-4"
                                data-hs-add-field-options='{
                                    "template": "#addTimeTemplate",
                                    "container": "#addTimeFieldContainer",
                                    "defaultCreated": 0
                                  }'
                              >
                                <div class="col time-input-box">
                                  <div class="time-input-wrap">
                                    <input
                                      type="button"
                                      class="js-flatpickr-time flatpickr-custom btn btn-white"
                                      placeholder="00:00"
                                      data-hs-flatpickr-options='{
                                        "noCalendar": true,
                                        "enableTime": true,
                                        "dateFormat": "H:i",
                                        "minTime": "10:00",
                                        "maxTime": "20:00",
                                        "time_24hr": true
                                      }'
                                    />
                                  </div>
                                  <p class="notice-text text-body text-center mt-4">등록된 커리큘럼 정보가 없습니다</p>
                                  <div id="addTimeFieldContainer"></div>
                                </div>
                                <div class="col-sm-auto">
                                  <a href="javascript:;" class="form-link fs-4 mt-2">
                                    <i class="bi-plus-circle me-1"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 mt-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="mb-3">
                                <label class="form-label" for="">예약 가능한 팀 수<span class="critical-items">*</span></label>
                                <input type="number" id="" class="form-control" />
                              </div>
                              <div class="mb-3">
                                <label class="form-label" for="">팀당 가능한 인원 수<span class="critical-items">*</span></label>
                                <input type="number" id="" class="form-control" />
                              </div>
                              <div class="form-check mb-3">
                                <label class="form-label" for="checkReservation3">예약 가능 여부</label>
                                <input type="checkbox" id="checkReservation3" class="form-check-input" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="addTimeTemplate" style={{ display:"none" }}>
                  <div class="input-group-add-field">
                    <button type="button" class="btn btn-outline-secondary w-100">13:00</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-10 d-flex align-items-center justify-content-end mt-4">
                <button type="button" class="btn btn-outline-danger me-2">취소</button>
                <button type="submit" id="noticeAddBtn" class="btn btn-primary">설정하기</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default ReservationCalendarManagement;