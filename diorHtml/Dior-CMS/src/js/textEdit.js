const textEditForm = document.querySelector("#textEditForm");
const textForKorean = document.querySelector("#textForKorean");
const textForEnglish = document.querySelector("#textForEnglish");
const textEditBtn = document.querySelector("#textEditBtn");
let isRequired = true;

/* 국문, 영문 필수값 입력시 수정 버튼 활성화 */
textEditForm.addEventListener("input", function () {
  if (textForKorean.value.length > 0 && textForEnglish.value.length > 0) {
    if (isRequired) {
      textEditBtn.disabled = false;
      isRequired = false;
    }
  } else {
    textEditBtn.disabled = true;
    isRequired = true;
  }
});
