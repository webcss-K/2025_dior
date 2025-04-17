import React from 'react';

// style
import Style from './index.module.scss';

// antd
import { Table } from "antd";

const ListForm = (props) => {
  return (
    <>
      <div class="card-body">
        <div class="d-flex justify-content-end mb-3">
          <a href="./noticeAdd.html" class="btn btn-soft-primary">등록하기<i class="bi bi-plus-circle-dotted pt-1 ms-1"></i> </a>
        </div>

        <Table 
        className={Style['TableForm']}
        columns={props.columns} 
        dataSource={props.data}
        bordered 
        pagination={{ position: ['bottomCenter'] }} 
        />
      </div>
    </>
  )
}

export default ListForm;