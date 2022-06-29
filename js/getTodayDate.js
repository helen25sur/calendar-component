import { getMonthWord } from './getMonthWord.js';
import { getCurrentStateDate } from './loadMonthDays.js';

export function getTodayDate() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const monthWord = getMonthWord(currentMonth);

  const monthItemEl = document.querySelector('.month-item.current-month');
  const allMonthsList = document.querySelectorAll('.month-item');

  // for current month 
  if (monthWord === monthItemEl.dataset.value) {
    console.log(monthWord);
  } else {
    monthItemEl.classList.remove('current-month');
    monthItemEl.classList.add('hidden');
    allMonthsList.forEach(month => {

      if (monthWord === month.dataset.value) {
        month.classList.add('current-month');
        month.classList.remove('hidden');
      }
    });

  }

  // for current year
  const yearsList = document.querySelector('.years-list');

  if (yearsList.querySelector('.year-item[selected]').value !== currentYear) {
    yearsList.value = currentYear;
    [...yearsList].forEach(year => {
      if (year.value === yearsList.value) {
        year.setAttribute('selected', true);
        getCurrentStateDate();
      }
    });
  }
  yearsList.addEventListener('change', () => {
    const yearSelected = yearsList.querySelector('.year-item[selected]');
    yearSelected.removeAttribute('selected');

    [...yearsList].forEach(year => {
      if (year.value === yearsList.value) {
        year.setAttribute('selected', true);
        getCurrentStateDate();
      }
    })
  });

}