const noticeAddForm = document.querySelector("#noticeAddForm");
const noticeTitleKo = document.querySelector("#noticeTitleKo");
const noticeTitleEn = document.querySelector("#noticeTitleEn");
const noticeContentKo = document.querySelector("#noticeContentKo");
const noticeContentEn = document.querySelector("#noticeContentEn");
const noticeAddBtn = document.querySelector("#noticeAddBtn");
let isRequired = true;

let arr = [noticeTitleKo, noticeTitleEn, noticeContentKo, noticeContentEn];

/* 공지사항 등록 버튼 활성화 */
noticeAddForm.addEventListener("input", function () {
  if (arr.every(checkRequired)) {
    if (isRequired) {
      noticeAddBtn.disabled = false;
      isRequired = false;
    }
  } else {
    noticeAddBtn.disabled = true;
    isRequired = true;
  }
});

function checkRequired(input) {
  return input.value !== "";
}
