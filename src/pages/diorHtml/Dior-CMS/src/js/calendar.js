const prevMonthBtn = document.querySelector("[data-fc-prev-month]");
const nextMonthBtn = document.querySelector("[data-fc-next-month]");
const todayBtn = document.querySelector("[data-fc-today]");
const dateTitle = document.querySelector("[data-fc-title]");

let calendarType = document.querySelectorAll("input[name=btnGroupSegmentRadio]");
const $programModal = document.querySelector("#programModal");
const programModal = new bootstrap.Modal($programModal);
const programName = document.querySelector("#programModal .program-name");

/* 풀 캘린더 설정 */
// INITIALIZATION OF FULLCALENDAR
// =======================================================
HSCore.components.HSFullCalendar.init("#js-fullcalendar", {
  timeZone: "local",
  headerToolbar: false,
  editable: false,
  locale: "ko",
  dayMaxEvents: 3,
  defaultAllDay: false,
  displayEventTime: false,
  nowIndicator: true,
  datesSet(dateSet) {
    dateTitle.textContent = dateSet.view.title;
  },
  events: [
    {
      title: "도스튼 프로그램 0/12",
      start: "2023-04-03T04:00:00",
      end: "2023-04-03T05:00:00",
      className: "label-on",
    },
    {
      title: "부띠크 방문 0/12",
      start: "2023-04-03T05:00:00",
      end: "2023-04-03T06:00:00",
      className: "fullcalendar-custom-event-tasks",
    },
    {
      title: "CAFÉ DIOR 0/24",
      start: "2023-04-03T15:00:00",
      end: "2023-04-03T16:00:00",
      className: "fullcalendar-custom-event-reminders label-on",
    },
    {
      title: "CAFÉ DIOR 0/24",
      start: "2023-04-05T17:00:00",
      end: "2023-04-05T18:00:00",
      className: "fullcalendar-custom-event-reminders",
    },
    {
      title: "부띠크 방문 0/12",
      start: "2023-04-22T04:00:00",
      end: "2023-04-022T05:00:00",
      className: "fullcalendar-custom-event-tasks label-on",
    },
    {
      title: "CAFÉ DIOR 0/24",
      start: "2023-04-22T13:00:00",
      end: "2023-04-22T14:00:00",
      className: "fullcalendar-custom-event-reminders",
    },
  ],
  eventClick: function (event) {
    let modalTitle = event.el.querySelector(".fc-event-title").textContent;
    let string = modalTitle.replace(new RegExp("[(0-9)]", "gi"), "").replace("/", "");
    programName.innerText = string;
    programModal.show(); /* [참고] 이벤트 클릭시 모달 보이기 */
  },
});

/* 캘린더 이전 달, 다음 달, 오늘 날짜로 선택 */
const fullcalendarCustomHeader = HSCore.components.HSFullCalendar.getItem("js-fullcalendar");
prevMonthBtn.addEventListener("click", function () {
  fullcalendarCustomHeader.prev();
});

nextMonthBtn.addEventListener("click", function () {
  fullcalendarCustomHeader.next();
});

todayBtn.addEventListener("click", function () {
  fullcalendarCustomHeader.today();
});

/* 월간 일간 캘린더 변경 */
calendarType.forEach((el) => {
  el.addEventListener("change", (e) => {
    let val = e.target.value;
    fullcalendarCustomHeader.changeView(val);
  });
});

todayBtn.setAttribute("title", new Date().toDateString());

/* 오픈 설정 버튼 활성화 && 페이지 이동 */
const openSetForm = document.querySelector("#openSetForm");
const openSetPassword = document.querySelector("#openSetPassword");
const openSetbtn = document.querySelector("#openSetbtn");
openSetForm.addEventListener("input", function () {
  if (openSetPassword.value != "") {
    openSetbtn.disabled = false;
  } else {
    openSetbtn.disabled = true;
  }
});

/* 오픈 설정 비밀 번호 확인 후 페이지 이동 */
openSetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  location.href = "./openSetting.html";
});
