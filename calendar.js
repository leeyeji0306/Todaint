const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();

function renderWeekDays() {
    const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
    const weekDaysEl = document.querySelector('#weekdays');

    console.log(weekDays)
    weekDays.forEach((item)=>{
        const wrapperEl = document.createElement('div');
        wrapperEl.textContent = item;
        weekDaysEl.appendChild(wrapperEl)
    })
}

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  // 이번 달 첫 날과 마지막 날
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // 화면 초기화
  daysContainer.innerHTML = "";

  // 월/년 표시
  monthYear.textContent = `${year}년 ${month + 1}월`;

  // 빈칸 (시작 요일 맞추기)
  for (let i = 0; i < firstDay.getDay(); i++) {
    const empty = document.createElement("div");
    daysContainer.appendChild(empty);
  }

  // 날짜 채우기
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    // 오늘 날짜 표시
    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    daysContainer.appendChild(dayDiv);
  }
}

prevBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
renderWeekDays();