import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

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

      <main class="main">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-end">
              <h2 class="page-header-title mb-0">텍스트 관리</h2>
            </div>
          </div>
          <div class="row">
            <div class="card overflow-hidden">
              <div class="card-body">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">구분</th>
                      <th scope="col">최근 업데이트</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      <Link to="/">개인정보처리방침(개인정보 수집 동의)</Link>
                        <a href="./textEdit.html" class="text-body"> 개인정보처리방침(개인정보 수집 동의) </a>
                      </td>
                      <td>2023-02-20 12:23:12</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="./textEdit.html" class="text-body">이용약관</a>
                      </td>
                      <td>2023-02-20 12:23:12</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="./textEdit.html" class="text-body">예약 안내 문구</a>
                      </td>
                      <td>2023-02-20 12:23:12</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="./textEdit.html" class="text-body">팝업 문구</a>
                      </td>
                      <td>2023-02-20 12:23:12</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="./textEdit.html" class="text-body">예약 시 주의사항</a>
                      </td>
                      <td>2023-02-20 12:23:12</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="./textEdit.html" class="text-body">코로나 감염 예방을 위한 운영안내</a>
                      </td>
                      <td>2023-02-20 12:23:12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main;