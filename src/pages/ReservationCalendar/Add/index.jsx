import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const ReservationCalendarAdd = (props) => {
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
              <h2 class="page-header-title mb-0 w-25">커리큘럼 등록하기</h2>
            </div>
          </div>
          <div class="row justify-content-lg-center">
            <div class="card col-lg-10">
              <form id="curriculumAddform" action="">
                <div class="card-body">
                  <div class="row mb-5 pb-4 border-bottom">
                    <div class="col-sm-2">도스튼 프로그램</div>
                    <div class="col">
                      <div class="row mb-4 align-items-center">
                        <div class="col-sm-3">
                          <label for="" class="form-label">예약 가능한 팀 수</label>
                          <input type="number" class="form-control" />
                        </div>
                        <div class="col-sm-3">
                          <label for="" class="form-label">팀당 가능한 인원 수</label>
                          <input type="number" class="form-control" />
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check mt-4">
                            <input type="checkbox" id="" class="form-check-input" name="" />
                            <label class="form-check-label" for="">주말 제외</label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <span class="form-label">예약 시간&nbsp;<i class="bi bi-clock"></i></span>
                        <div class="btn-group time-btn-wrap" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="cafeTime1" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime1">10:00</label>

                          <input type="checkbox" class="btn-check" id="cafeTime2" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime2">11:00</label>

                          <input type="checkbox" class="btn-check" id="cafeTime3" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime3">12:00</label>
                          <input type="checkbox" class="btn-check" id="cafeTime4" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime4">13:00</label>
                          <input type="checkbox" class="btn-check" id="cafeTime5" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime5">14:00</label>

                          <input type="checkbox" class="btn-check" id="cafeTime6" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime6">15:00</label>

                          <input type="checkbox" class="btn-check" id="cafeTime7" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime7">16:00</label>
                          <input type="checkbox" class="btn-check" id="cafeTime8" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime8">17:00</label>
                          <input type="checkbox" class="btn-check" id="cafeTime9" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime9">18:00</label>

                          <input type="checkbox" class="btn-check" id="cafeTime10" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime10">19:00</label>

                          <input type="checkbox" class="btn-check" id="cafeTime11" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="cafeTime11">20:00</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-5 pb-4 border-bottom">
                    <div class="col-sm-2">부띠크 방문</div>
                    <div class="col">
                      <div class="row mb-4 align-items-center">
                        <div class="col-sm-3">
                          <label for="" class="form-label">예약 가능한 팀 수</label>
                          <input type="number" class="form-control" />
                        </div>
                        <div class="col-sm-3">
                          <label for="" class="form-label">팀당 가능한 인원 수</label>
                          <input type="number" class="form-control" />
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check mt-4">
                            <input type="checkbox" id="" class="form-check-input" name="" />
                            <label class="form-check-label" for="">주말 제외</label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <span class="form-label">예약 시간&nbsp;<i class="bi bi-clock"></i></span>
                        <div class="btn-group time-btn-wrap" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="docentTime1" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime1">10:00</label>

                          <input type="checkbox" class="btn-check" id="docentTime2" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime2">11:00</label>

                          <input type="checkbox" class="btn-check" id="docentTime3" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime3">12:00</label>
                          <input type="checkbox" class="btn-check" id="docentTime4" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime4">13:00</label>
                          <input type="checkbox" class="btn-check" id="docentTime5" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime5">14:00</label>

                          <input type="checkbox" class="btn-check" id="docentTime6" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime6">15:00</label>

                          <input type="checkbox" class="btn-check" id="docentTime7" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime7">16:00</label>
                          <input type="checkbox" class="btn-check" id="docentTime8" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime8">17:00</label>
                          <input type="checkbox" class="btn-check" id="docentTime9" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime9">18:00</label>

                          <input type="checkbox" class="btn-check" id="docentTime10" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime10">19:00</label>

                          <input type="checkbox" class="btn-check" id="docentTime11" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="docentTime11">20:00</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row pb-4 border-bottom">
                    <div class="col-sm-2">CAFÉ DIOR</div>
                    <div class="col">
                      <div class="row mb-4 align-items-center">
                        <div class="col-sm-3">
                          <label for="" class="form-label">예약 가능한 팀 수</label>
                          <input type="number" class="form-control" />
                        </div>
                        <div class="col-sm-3">
                          <label for="" class="form-label">팀당 가능한 인원 수</label>
                          <input type="number" class="form-control" />
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check mt-4">
                            <input type="checkbox" id="" class="form-check-input" name="" />
                            <label class="form-check-label" for="">주말 제외</label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <span class="form-label">예약 시간&nbsp;<i class="bi bi-clock"></i></span>
                        <div class="btn-group time-btn-wrap" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="boutiqueTime1" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime1">10:00</label>

                          <input type="checkbox" class="btn-check" id="boutiqueTime2" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime2">11:00</label>

                          <input type="checkbox" class="btn-check" id="boutiqueTime3" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime3">12:00</label>
                          <input type="checkbox" class="btn-check" id="boutiqueTime4" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime4">13:00</label>
                          <input type="checkbox" class="btn-check" id="boutiqueTime5" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime5">14:00</label>

                          <input type="checkbox" class="btn-check" id="boutiqueTime6" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime6">15:00</label>

                          <input type="checkbox" class="btn-check" id="boutiqueTime7" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime7">16:00</label>
                          <input type="checkbox" class="btn-check" id="boutiqueTime8" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime8">17:00</label>
                          <input type="checkbox" class="btn-check" id="boutiqueTime9" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime9">18:00</label>

                          <input type="checkbox" class="btn-check" id="boutiqueTime10" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime10">19:00</label>

                          <input type="checkbox" class="btn-check" id="boutiqueTime11" autocomplete="off" />
                          <label class="btn btn-outline-warning time-btn" for="boutiqueTime11">20:00</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-end mt-3">
                    <button type="button" class="btn btn-outline-danger me-2">취소</button>
                    <button type="submit" id="noticeAddBtn" class="btn btn-primary">설정하기</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ReservationCalendarAdd;