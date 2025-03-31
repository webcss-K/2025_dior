import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

const Main = (props) => {
  
  useEffect(()=>{
    console.log("deploy test");
  },[])
  
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      <div class="wrap">
        <div class="position-fixed top-0 end-0 start-0 bg-img-start" className={Style['bgStyle']} style={{ height:"32rem"}} >

          <div class="shape shape-bottom zi-1" className={Style['shape-bottom']}>
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
              <polygon fill="#fff" points="0,273 1921,273 1921,0 " />
            </svg>
          </div>

        </div>
        <div class="container login" className={Style['login']}>
          <div class="d-flex justify-content-center mb-3">
            <h1 class="text-body">Dior CMS</h1>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 class="display-5 text-center mb-4">로그인</h2>
              <form id="loginForm">
                <div class="input-group-wrap">
                  <label for="userPassword" class="form-label">Password</label>
                  <div class="input-group input-group-merge" data-hs-validation-validate-class>
                    <input
                      type="password"
                      class="js-toggle-password form-control"
                      id="userPassword"
                      name="password"
                      placeholder="비밀번호를 입력해주세요."
                      data-hs-toggle-password-options='{
                                    "target": "#changePassTarget",
                                    "defaultClass": "bi-eye-slash",
                                    "showClass": "bi-eye",
                                    "classChangeTarget": "#changePassIcon"
                                    }'
                    />
                    <a id="changePassTarget" class="input-group-append input-group-text" href="javascript:;">
                      <i id="changePassIcon" class="bi-eye"></i>
                    </a>
                  </div>
                </div>

                <button id="btnSubmitForm" class="btn btn-primary w-100 mt-5" disabled>로그인</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;