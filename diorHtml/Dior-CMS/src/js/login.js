const loginForm = document.querySelector("#loginForm");
const userPassword = document.querySelector("#userPassword");
const btnSubmitForm = document.querySelector("#btnSubmitForm");

/* 로그인 버튼 활성화 */
loginForm.addEventListener("input", function () {
  if (userPassword.value != "") {
    btnSubmitForm.disabled = false;
  } else {
    btnSubmitForm.disabled = true;
  }
});

/* 로그인 버튼 로딩 상태로 변경 */
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  btnSubmitForm.disabled = true;
  btnSubmitForm.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...`;
});
