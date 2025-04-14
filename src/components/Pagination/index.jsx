import React from 'react';

// style
import Style from './index.module.scss';

const Pagination = (props) => {

  return (
    <>
      <div class="card-footer d-flex justify-content-center border-0">
        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span class="visually-hidden">Previous</span>
              </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span class="visually-hidden">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagination;