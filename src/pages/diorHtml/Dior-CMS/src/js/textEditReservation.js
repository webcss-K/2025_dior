
const titleForKorean = document.querySelector("#titleForKorean");
const contentForKorean = document.querySelector("#contentForKorean");
const titleForEnglish = document.querySelector("#titleForEnglish");
const contentForEnglish = document.querySelector("#contentForEnglish");
const textEditBtn = document.querySelector("#textEditBtn");
let isRequired = true;
let textEditReservationForm =  document.querySelector('#textEditReservationForm')

let inputArr = [titleForKorean,contentForKorean,titleForEnglish,contentForEnglish];
/* 국문, 영문 필수값 입력시 수정 버튼 활성화 */
textEditReservationForm.addEventListener("input", function () {
  if (inputArr.every(checkValue)) {
    if (isRequired) {
      textEditBtn.disabled = false;
      isRequired = false;
    }
  } else {
    textEditBtn.disabled = true;
    isRequired = true;
  }
});

function checkValue(input){
  return input.value.length > 0;
}