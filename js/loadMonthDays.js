/* eslint-disable no-magic-numbers */
import { getMonthWord } from './getMonthWord.js';

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
console.log(currentYear);

const MSinDay = 86400000;
const allCells = document.querySelectorAll('.day-number');
const weekLines = document.querySelectorAll('.weeks-line');

export function getCurrentStateDate() {
  const currentStateMonth = document.querySelector('.current-month').dataset.value;
  console.log(currentStateMonth);
  const currentStateYear = document.querySelector('.year-item[selected="true"]').value;
  console.log(currentStateYear);

  const needDate = new Date(`${currentStateMonth}, ${currentStateYear}`);
  const month = needDate.getMonth();
  const year = needDate.getFullYear();
  const timeInMSFirstDayMonth = needDate.getTime();

  const firstDayMonthInWeek = needDate.getDay();

  let nextDayMS = timeInMSFirstDayMonth;
  const objMonth = new Set();
  for (let i = 0; i < 31; i++) {
    const nexDayDate = new Date(nextDayMS);
    const day = nexDayDate.getDate();
    objMonth.add(day);

    nextDayMS += MSinDay;
  }

  const monthArr = [];
  Array.from(weekLines).forEach(week => {
    monthArr.push([...week.children]);
  });


  let startCellIndex = 0;

  Array.from(weekLines[0].children).forEach(day => {
    if (+day.dataset.dayweek === firstDayMonthInWeek) {
      startCellIndex = +day.dataset.dayweek;
    }
  });


  allCells.forEach((cell) => {
    cell.innerText = '';
    cell.className = '';
  })

  for (let i = startCellIndex, y = 0; i < allCells.length; i++, y++) {
    let cell;
    if (i === 0) {
      i = 7;
      cell = allCells[i];
    }

    cell = allCells[i - 1];
    if ([...objMonth][y] !== undefined) {
      cell.innerText = [...objMonth][y];
      cell.classList.add('day-number');
    }
  }

  const newCell = [...document.querySelectorAll('.weeks-line>td')];
  if (currentMonth === month && currentYear === year) {
    newCell.forEach(cell => {
      if (+cell.innerText === currentDay) {
        cell.classList.add('today');
      }
    });
  }

  const first = new Date(`${getMonthWord(month)}, ${year}`);
  let current = first;

  for (let i = startCellIndex - 2; i >= 0; i--) {
    const prevDay = new Date(current.getTime() - MSinDay);
    if (newCell[i] !== undefined) {
      newCell[i].innerText = prevDay.getDate();
      newCell[i].classList.add('day-number');
      newCell[i].classList.add('inactive-day');
    }
    current = prevDay;
  }

  if (startCellIndex === 0) {
    for (let i = 5; i >= 0; i--) {
      const prevDay = new Date(current.getTime() - MSinDay);
      if (newCell[i] !== undefined) {
        newCell[i].innerText = prevDay.getDate();
        newCell[i].classList.add('day-number');
        newCell[i].classList.add('inactive-day');
      }
      current = prevDay;
    }
  }

  let counter = 1;
  newCell.forEach((cell) => {
    if (cell.innerHTML === '') {
      cell.innerText = counter;
      cell.classList.add('day-number');
      cell.classList.add('inactive-day');
      counter++;
    }
  });

  const newWeekLines = document.querySelectorAll('.weeks-line');

  [...newWeekLines].forEach(line => {
    if (line.classList.contains('hidden')) {
      line.classList.remove('hidden');
    }
  });
  [...newWeekLines].forEach(line => {
    if ([...line.children].every(item => item.classList.contains('inactive-day'))) {
      line.classList.add('hidden');
    }
  })


}


