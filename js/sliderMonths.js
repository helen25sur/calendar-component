/* eslint-disable no-magic-numbers */
import { getCurrentStateDate } from './loadMonthDays.js';

const monthsListEl = document.querySelectorAll('.month-item');
const yearsList = document.querySelector('.years-list');
const yearItemsList = document.querySelectorAll('.year-item');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
export function slideMonths() {
  btnNext.addEventListener('click', () => {

    for (let i = 0; i < monthsListEl.length; i++) {
      const month = monthsListEl[i];
      let nextMonth = monthsListEl[i + 1];
      if (!month.classList.contains('hidden')) {
        if (i === 11) {
          nextMonth = monthsListEl[0];

          const selectedYear = document.querySelector(`.year-item[value="${yearsList.value}"]`);
          const curIndex = [...yearItemsList].indexOf(selectedYear);
          selectedYear.removeAttribute('selected');
          if (yearItemsList[curIndex + 1] !== undefined) {
            yearItemsList[curIndex + 1].setAttribute('selected', true);
            yearsList.value = yearItemsList[curIndex + 1].value;
            getCurrentStateDate();
          }

        }
        month.classList.add('hidden');
        month.classList.remove('current-month');
        nextMonth.classList.remove('hidden');
        nextMonth.classList.add('current-month');
        getCurrentStateDate();
        break;
      }
    }
  });

  btnPrev.addEventListener('click', () => {
    for (let i = monthsListEl.length - 1; i >= 0; i--) {
      const month = monthsListEl[i];
      let prevMonth = monthsListEl[i - 1];

      if (!month.classList.contains('hidden')) {
        if (i === 0) {
          prevMonth = monthsListEl[11];

          const selectedYear = document.querySelector(`.year-item[value="${yearsList.value}"]`);
          const curIndex = [...yearItemsList].indexOf(selectedYear);
          selectedYear.removeAttribute('selected');
          if (yearItemsList[curIndex - 1] !== undefined) {
            yearItemsList[curIndex - 1].setAttribute('selected', true);
            yearsList.value = yearItemsList[curIndex - 1].value;
            getCurrentStateDate();
          }
        }
        month.classList.add('hidden');
        month.classList.remove('current-month');
        prevMonth.classList.remove('hidden');
        prevMonth.classList.add('current-month');
        getCurrentStateDate();
        break;
      }
    }
  })
}