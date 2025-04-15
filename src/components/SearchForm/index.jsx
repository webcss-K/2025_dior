import React from 'react';

// style
import Style from './index.module.scss';

// mui
import { Form, Row, Col, Input, Select, Button } from "antd";
const { Option } = Select;

const SearchForm = (props) => {

  return (
    <>
      <div class="card-header">
        <div class="mb-2">
          <form id="noticeSearchForm">
            <Row>
              <Col span={12}>
                <Form.Item 
                  name="title-text" 
                  label="제목/내용"
                  layout="vertical"
                  labelCol={{ span: 12 }}
                  wrapperCol={{ span: 12 }}
                >
                  <Input allowClear />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item 
                  name="title-text" 
                  label="언어" 
                  layout="vertical"
                  labelCol={{ span: 12 }}
                  wrapperCol={{ span: 12 }}
                >
                  <Select
                    defaultValue="전체"
                  >
                    <Option value="male">전체</Option>
                    <Option value="female">국문</Option>
                    <Option value="other">영문</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item 
                  name="title-text" 
                  label="노출여부" 
                  layout="vertical"
                  labelCol={{ span: 12 }}
                  wrapperCol={{ span: 12 }}
                >
                  <Select
                    defaultValue="전체"
                  >
                    <Option value="male">전체</Option>
                    <Option value="female">노출</Option>
                    <Option value="other">비노출</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24} align="right">
                <Button>검색</Button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </>
  )
}

export default SearchForm;