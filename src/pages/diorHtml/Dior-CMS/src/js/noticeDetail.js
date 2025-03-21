const noticeDetailForm = document.querySelector("#noticeDetailForm");
const noticeTitleKo = document.querySelector("#noticeTitleKo");
const noticeTitleEn = document.querySelector("#noticeTitleEn");
const noticeContentKo = document.querySelector("#noticeContentKo");
const noticeContentEn = document.querySelector("#noticeContentEn");
const noticeEditBtn = document.querySelector("#noticeEditBtn");

let isRequired = true;
let arr = [noticeTitleKo, noticeTitleEn, noticeContentKo, noticeContentEn];

/* 공지사항 수정 버튼 활성화 */
noticeDetailForm.addEventListener("input", function () {
  if (arr.every(checkRequired)) {
    if (isRequired) {
      noticeEditBtn.disabled = false;
      isRequired = false;
    }
  } else {
    noticeEditBtn.disabled = true;
    isRequired = true;
  }
});

function checkRequired(input) {
  return input.value !== "";
}
