import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const ReservationCalendarEdit = (props) => {
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      <main class="main">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-center">
              <button type="button" class="btn btn-ghost btn-icon btn-lg w-0 me-2" onclick="location.href = './textManagement.html'">
                <i class="bi-chevron-left"></i>
              </button>
              <h2 class="page-header-title mb-0 w-25">팝업 문구</h2>
            </div>
          </div>
          <div class="row justify-content-lg-center">
            <div class="card col-lg-10">
              <form id="textEditForm" action="">
                <div class="card-body">
                  <div class="row mb-4 align-items-center">
                    <label for="textForKorean" class="col-2 col-form-label">국문<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <textarea class="form-control w-60" id="textForKorean" rows="6"></textarea>
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="textForEnglish" class="col-2 col-form-label">영문<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <textarea class="form-control w-60" id="textForEnglish" rows="6"></textarea>
                    </div>
                  </div>
                  <p class="text-body text-center pt-3">- 오픈 설정 값이 OFF일 경우 해당 팝업이 노출됩니다.</p>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-end">
                  <button type="button" class="btn btn-outline-danger me-2">취소</button>
                  <button type="submit" id="textEditBtn" class="btn btn-primary" disabled>수정하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ReservationCalendarEdit;