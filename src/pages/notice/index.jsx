import React from 'react';
import {Helmet} from "react-helmet";

// style
import Style from './index.module.scss';

// conponents
import SearchForm from 'components/SearchForm';
import ListForm from 'components/ListForm';
import Pagination from 'components/Pagination';

const Notice = (props) => {
  
  return (
    <>
      <Helmet>
          <title>{props.metaTitle}</title>
      </Helmet>

      <main class="main">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-end">
              <h2 class="page-header-title mb-0">{props.metaTitle}</h2>
            </div>
          </div>

          <div class="row">
            <div class="card">
              <SearchForm/>

              <ListForm />
              
              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Notice;