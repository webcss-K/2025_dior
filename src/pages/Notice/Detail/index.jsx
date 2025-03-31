import React from 'react';
import {Helmet} from "react-helmet";

// style
import './index.module.scss';

const Main = (props) => {
  
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      <main class="main">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-center">
              <button type="button" class="btn btn-ghost btn-icon btn-lg w-0 me-2" onclick="location.href = './notice.html'">
                <i class="bi-chevron-left"></i>
              </button>
              <h2 class="page-header-title mb-0 w-25">공지사항 상세</h2>
            </div>
          </div>
          <div class="row justify-content-lg-center">
            <div class="card col-lg-10">
              <form id="noticeDetailForm" action="">
                <div class="card-body">
                  <div class="row mb-4 align-items-center">
                    <label for="noticeTitleKo" class="col-2 col-form-label">제목(국문)<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <input type="text" id="noticeTitleKo" class="form-control w-50" value="3월 예약 일정안내" />
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="noticeContentKo" class="col-2 col-form-label">내용(국문)<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <textarea class="form-control w-50" id="noticeContentKo" rows="6"></textarea>
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="noticeTitleEn" class="col-2 col-form-label">제목(영문)<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <input type="text" id="noticeTitleEn" class="form-control w-50" value="Reservation schedule for Aril" />
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="noticeContentEn" class="col-2 col-form-label">내용(영문)<span class="critical-items">*</span> </label>
                    <div class="col-sm-9">
                      <textarea class="form-control w-50" id="noticeContentEn" rows="6"></textarea>
                    </div>
                  </div>
                  <div class="row mb-4 align-items-center">
                    <label for="formCheck11" class="col-2 col-form-label">노출여부</label>
                    <div class="col-sm-9">
                      <div class="form-check mb-3">
                        <input type="checkbox" id="formCheck11" class="form-check-input" checked />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-end">
                  <button type="button" class="btn btn-outline-danger me-2">취소</button>
                  <button type="submit" id="noticeEditBtn" class="btn btn-primary" disabled>수정하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main;