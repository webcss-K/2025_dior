import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const TextManagementReservation = (props) => {
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
              <h2 class="page-header-title mb-0 w-25">예약 안내 문구</h2>
            </div>
          </div>
          <div class="row justify-content-lg-center">
            <div class="card col-lg-10">
              <form id="textEditReservationForm" action="">
                <div class="card-body">
                  <div class="row mb-4 align-items-center">
                    <label for="titleForKorean" class="col-2 col-form-label">타이틀(국문)<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <input type="text" id="titleForKorean" class="form-control" />
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="contentForKorean" class="col-2 col-form-label">내용(국문)<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <textarea class="form-control" id="contentForKorean" rows="6"></textarea>
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="titleForEnglish" class="col-2 col-form-label">타이틀(영문)<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <input type="text" id="titleForEnglish" class="form-control" />
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="contentForEnglish" class="col-2 col-form-label">내용(영문)<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <textarea class="form-control" id="contentForEnglish" rows="6"></textarea>
                    </div>
                  </div>
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

export default TextManagementReservation;