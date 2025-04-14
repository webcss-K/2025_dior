import React from 'react';

// style
import Style from './index.module.scss';

// mui
import { Select, Form } from "antd";
const { Option } = Select;

const SearchForm = (props) => {

  return (
    <>
      <div class="card-header">
        <div class="mb-2">
          <form id="noticeSearchForm">
            <div class="row align-items-center mb-3">
            <Form.Item name="gender" label="언어">
              <Select
                allowClear
              >
                <Option value="male">전체</Option>
                <Option value="female">국문</Option>
                <Option value="other">영문</Option>
              </Select>
            </Form.Item>
              <label for="noticeTitle" class="col-sm-1 col-form-label">제목/내용</label>
              <div class="col-sm-4">
                <div class="input-group input-group-merge">
                  <input type="text" id="noticeTitle" class="form-control" />
                  <button type="button" id="textDelete" class="btn btn btn-outline-none btn-text-delete input-group-append input-group-text">
                    <i class="bi bi-x"></i></button>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <label for="" class="col-sm-1 col-form-label">언어</label>
              <div class="col-sm-4 me-10">
                <div class="tom-select-custom">
                  <select
                    class="js-select form-select"
                    autocomplete="off"
                    data-hs-tom-select-options='{
                            "hideSearch": true
                        }'
                  >
                    <option value="1">전체</option>
                    <option value="2">국문</option>
                    <option value="3">영문</option>
                  </select>
                </div>
              </div>
              <label for="" class="col-sm-1 col-form-label">노출여부</label>
              <div class="col-sm-4">
                <div class="tom-select-custom">
                  <select
                    class="js-select form-select"
                    autocomplete="off"
                    data-hs-tom-select-options='{
                            "hideSearch": true
                        }'
                  >
                    <option value="1">전체</option>
                    <option value="2">노출</option>
                    <option value="3">비노출</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-soft-info">검색</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SearchForm;