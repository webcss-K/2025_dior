/* 방문 일시 */
// INITIALIZATION OF DATERANGEPICKER
// =======================================================
$(".js-daterangepicker").daterangepicker(
  {
    timePicker: true,
    timePicker24Hour: true,
    autoApply: true,
    autoUpdateInput: false,
    opens: "center",
    locale: {
      format: "YYYY-MM-DD hh:mmA",
      separator: " ~ ",
    },
  },
  function (start, end, label) {
    document.querySelector(".js-daterangepicker").value = start.format("YYYY-MM-DD hh:mmA") + " ~ " + end.format("YYYY-MM-DD hh:mmA");
  }
);

/* 예약 일시 */
$(".js-daterangepicker-time").daterangepicker(
  {
    timePicker: true,
    timePicker24Hour: true,
    startDate: moment().startOf("hour").subtract(1, "months"),
    endDate: moment().startOf("hour"),
    opens: "center",
    locale: {
      format: "YYYY-MM-DD hh:mmA",
      separator: " ~ ",
    },
  },
  function (start, end, label) {
    document.querySelector(".js-daterangepicker-time").value = start.format("YYYY-MM-DD hh:mmA") + " ~ " + end.format("YYYY-MM-DD hh:mmA");
  }
);

/* 이름 필드 삭제 버튼 활성화 */
const inputName = document.querySelector("#inputName");
const textDelete = document.querySelector("#nameDelete");
inputName.addEventListener("input", function () {
  textDelete.classList.add("on");

  if (inputName.value == "") {
    textDelete.classList.remove("on");
  }
});

/* 이름 필드 x 버튼 클릭시 내용 삭제 */
textDelete.addEventListener("click", function () {
  inputName.value = "";
});

/* 연락처 필드 삭제 버튼 활성화 */
const inputPhone = document.querySelector("#inputPhone");
const numDelete = document.querySelector("#numDelete");
inputPhone.addEventListener("input", function () {
  numDelete.classList.add("on");

  if (inputPhone.value == "") {
    numDelete.classList.remove("on");
  }
});
/* 연락처 필드 x 버튼 클릭시 내용 삭제 */
numDelete.addEventListener("click", function () {
  inputPhone.value = "";
});
