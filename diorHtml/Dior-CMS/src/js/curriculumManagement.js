/* 날짜 선택 달력  */
// INITIALIZATION OF DATERANGEPICKER
// =======================================================
$(".js-flatpickr").flatpickr({
  defaultDate: null,
  inline: true,
});

/* 예약 시간 리스트 타임피커 필드 추가 */
// INITIALIZATION OF FLATPICKR
// =======================================================
HSCore.components.HSFlatpickr.init(".js-flatpickr-time");

const timeFlatpickr = document.querySelectorAll(".js-flatpickr-time");
const noticeText = document.querySelector(".notice-text");
timeFlatpickr.forEach((el) => {
  el.addEventListener("change", function (e) {
    let addBtn = el.closest("div.time-input-box").nextElementSibling.firstElementChild;
    addBtn.classList.add("js-create-field"); /* [참고] 시간 변경시에만 필드 추가 버튼 활성화 */
  });
  el.addEventListener("click", function () {
    let timeBtn = document.querySelectorAll(".time-input-box button.btn");
    timeBtn.forEach((el) => {
      el.classList.remove("active"); /* [참고] 타임 선택시 예약 시간 리스트 버튼 active 제거 */
    });
  });
});
// INITIALIZATION OF ADD FIELD
// =======================================================
new HSAddField(".js-add-field", {
  addedField: (field) => {
    if (field.parentElement.previousElementSibling.classList.contains("notice-text")) {
      noticeText.style.display = "none"; //[참고] 타임피커 추가시 "등록된 정보가 없습니다" 텍스트 사라짐
    }
    let timeListBtn = field.querySelector(".btn"); //[참고]추가된 시간 목록 버튼
    let time = field.parentElement.closest("div.time-input-box").firstElementChild.firstElementChild.value;
    timeListBtn.textContent = time;

    let addFieldBtn = field.closest("div.time-input-box").nextElementSibling.firstElementChild;
    addFieldBtn.classList.remove("js-create-field"); /* [참고] 필드 추가 후 버튼 비활성화 */

    /* 예약 시간 리스트 버튼 클릭 활성화 */
    let timeBtn = document.querySelectorAll(".time-input-box button.btn");

    timeBtn.forEach((list) => {
      list.addEventListener("click", function () {
        timeBtn.forEach((el) => {
          el.classList.remove("active");
        });
        list.classList.add("active");
      });
    });
  },
});

/* 예약 시간 리스트 버튼 클릭 활성화 */
let timeBtn = document.querySelectorAll(".time-input-box button.btn");

timeBtn.forEach((list) => {
  list.addEventListener("click", function () {
    timeBtn.forEach((el) => {
      el.classList.remove("active");
    });
    list.classList.add("active");
  });
});
