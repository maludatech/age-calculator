const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

const dayOutput = document.getElementById("day-output");
const monthOutput = document.getElementById("month-output");
const yearOutput = document.getElementById("year-output");
const button = document.querySelector("button");



function handleClick() {
    const inputDayValue = parseInt(dayEl.value);
    const inputMonthValue = parseInt(monthEl.value);
    const inputYearValue = parseInt(yearEl.value);

    if (
        isNaN(inputDayValue) || isNaN(inputMonthValue) || isNaN(inputYearValue) ||
        inputDayValue <= 0 || inputDayValue > 31 ||
        inputMonthValue <= 0 || inputMonthValue > 12 ||
        inputYearValue <= 0
    ) {
        yearOutput.innerText = "invalid";
        monthOutput.innerText = "invalid";
        dayOutput.innerText = "invalid";
        return; // Exit early if input is invalid
    }

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    let years = currentYear - inputYearValue;
    let months = currentMonth - inputMonthValue;
    let days = currentDay - inputDayValue;

    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        days += new Date(
            currentYear, currentMonth - 1, 0
        ).getDate();
    }

    yearOutput.innerText = years;
    monthOutput.innerText = months;
    dayOutput.innerText = days;
}

button.addEventListener("click", handleClick);