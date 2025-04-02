/* 제목/내용 필드 삭제 버튼 활성화 */
const noticeTitle = document.querySelector("#noticeTitle");
const textDelete = document.querySelector("#textDelete");
noticeTitle.addEventListener("input", function () {
  textDelete.classList.add("on");

  if (noticeTitle.value == "") {
    textDelete.classList.remove("on");
  }
});

/* 이름 필드 x 버튼 클릭시 내용 삭제 */
textDelete.addEventListener("click", function () {
  noticeTitle.value = "";
});
