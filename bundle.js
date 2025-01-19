/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./img/1_3.png":
/*!*********************!*\
  !*** ./img/1_3.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/1_3.png\";\n\n//# sourceURL=webpack://modules/./img/1_3.png?");

/***/ }),

/***/ "./img/3_1.png":
/*!*********************!*\
  !*** ./img/3_1.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/3_1.png\";\n\n//# sourceURL=webpack://modules/./img/3_1.png?");

/***/ }),

/***/ "./img/5_3.png":
/*!*********************!*\
  !*** ./img/5_3.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/5_3.png\";\n\n//# sourceURL=webpack://modules/./img/5_3.png?");

/***/ }),

/***/ "./img/icons/icons8-night-30.png":
/*!***************************************!*\
  !*** ./img/icons/icons8-night-30.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icons/icons8-night-30.png\";\n\n//# sourceURL=webpack://modules/./img/icons/icons8-night-30.png?");

/***/ }),

/***/ "./img/icons/icons8-sun-30.png":
/*!*************************************!*\
  !*** ./img/icons/icons8-sun-30.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icons/icons8-sun-30.png\";\n\n//# sourceURL=webpack://modules/./img/icons/icons8-sun-30.png?");

/***/ }),

/***/ "./img/icons/prev-dark.svg":
/*!*********************************!*\
  !*** ./img/icons/prev-dark.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icons/prev-dark.svg\";\n\n//# sourceURL=webpack://modules/./img/icons/prev-dark.svg?");

/***/ }),

/***/ "./img/icons/prev.svg":
/*!****************************!*\
  !*** ./img/icons/prev.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icons/prev.svg\";\n\n//# sourceURL=webpack://modules/./img/icons/prev.svg?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modules/./scss/style.scss?");

/***/ }),

/***/ "./js/getMonthWord.js":
/*!****************************!*\
  !*** ./js/getMonthWord.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMonthWord: () => (/* binding */ getMonthWord)\n/* harmony export */ });\n/* eslint-disable no-magic-numbers */\r\nfunction getMonthWord(monthNum) {\r\n  let month = '';\r\n  switch (monthNum) {\r\n    case 0:\r\n      month = 'January';\r\n      break;\r\n    case 1:\r\n      month = 'February';\r\n      break;\r\n    case 2:\r\n      month = 'March';\r\n      break;\r\n    case 3:\r\n      month = 'April';\r\n      break;\r\n    case 4:\r\n      month = 'May';\r\n      break;\r\n    case 5:\r\n      month = 'June';\r\n      break;\r\n    case 6:\r\n      month = 'July';\r\n      break;\r\n    case 7:\r\n      month = 'August';\r\n      break;\r\n    case 8:\r\n      month = 'September';\r\n      break;\r\n    case 9:\r\n      month = 'October';\r\n      break;\r\n    case 10:\r\n      month = 'November';\r\n      break;\r\n    case 11:\r\n      month = 'December';\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n  return month;\r\n}\n\n//# sourceURL=webpack://modules/./js/getMonthWord.js?");

/***/ }),

/***/ "./js/getTodayDate.js":
/*!****************************!*\
  !*** ./js/getTodayDate.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTodayDate: () => (/* binding */ getTodayDate)\n/* harmony export */ });\n/* harmony import */ var _getMonthWord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMonthWord.js */ \"./js/getMonthWord.js\");\n/* harmony import */ var _loadMonthDays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMonthDays.js */ \"./js/loadMonthDays.js\");\n\r\n\r\n\r\nfunction getTodayDate() {\r\n  const today = new Date();\r\n  const currentMonth = today.getMonth();\r\n  const currentYear = today.getFullYear();\r\n\r\n  const monthWord = (0,_getMonthWord_js__WEBPACK_IMPORTED_MODULE_0__.getMonthWord)(currentMonth);\r\n\r\n  const monthItemEl = document.querySelector('.month-item.current-month');\r\n  const allMonthsList = document.querySelectorAll('.month-item');\r\n\r\n  // for current month \r\n  if (monthWord === monthItemEl.dataset.value) {\r\n    console.log(monthWord);\r\n  } else {\r\n    monthItemEl.classList.remove('current-month');\r\n    monthItemEl.classList.add('hidden');\r\n    allMonthsList.forEach(month => {\r\n\r\n      if (monthWord === month.dataset.value) {\r\n        month.classList.add('current-month');\r\n        month.classList.remove('hidden');\r\n      }\r\n    });\r\n\r\n  }\r\n\r\n  // for current year\r\n  const yearsList = document.querySelector('.years-list');\r\n\r\n  if (yearsList.querySelector('.year-item[selected]').value !== currentYear) {\r\n    yearsList.value = currentYear;\r\n    [...yearsList].forEach(year => {\r\n      if (year.value === yearsList.value) {\r\n        year.setAttribute('selected', true);\r\n        (0,_loadMonthDays_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentStateDate)();\r\n      }\r\n    });\r\n  }\r\n  yearsList.addEventListener('change', () => {\r\n    const yearSelected = yearsList.querySelector('.year-item[selected]');\r\n    yearSelected.removeAttribute('selected');\r\n\r\n    [...yearsList].forEach(year => {\r\n      if (year.value === yearsList.value) {\r\n        year.setAttribute('selected', true);\r\n        (0,_loadMonthDays_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentStateDate)();\r\n      }\r\n    })\r\n  });\r\n\r\n}\n\n//# sourceURL=webpack://modules/./js/getTodayDate.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_1_3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../img/1_3.png */ \"./img/1_3.png\");\n/* harmony import */ var _img_3_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/3_1.png */ \"./img/3_1.png\");\n/* harmony import */ var _img_5_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../img/5_3.png */ \"./img/5_3.png\");\n/* harmony import */ var _img_icons_icons8_night_30_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../img/icons/icons8-night-30.png */ \"./img/icons/icons8-night-30.png\");\n/* harmony import */ var _img_icons_icons8_sun_30_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../img/icons/icons8-sun-30.png */ \"./img/icons/icons8-sun-30.png\");\n/* harmony import */ var _img_icons_prev_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../img/icons/prev.svg */ \"./img/icons/prev.svg\");\n/* harmony import */ var _img_icons_prev_dark_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../img/icons/prev-dark.svg */ \"./img/icons/prev-dark.svg\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _getTodayDate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getTodayDate.js */ \"./js/getTodayDate.js\");\n/* harmony import */ var _sliderMonths_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sliderMonths.js */ \"./js/sliderMonths.js\");\n/* harmony import */ var _loadMonthDays_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loadMonthDays.js */ \"./js/loadMonthDays.js\");\n/* harmony import */ var _switchTheme_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./switchTheme.js */ \"./js/switchTheme.js\");\n\r\n\r\n\r\n// import './../img/icons/favicon.ico';\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import { getMonthWord } from './getMonthWord.js';\r\n\r\n\r\n\r\n\r\n\r\n(0,_getTodayDate_js__WEBPACK_IMPORTED_MODULE_8__.getTodayDate)();\r\n(0,_sliderMonths_js__WEBPACK_IMPORTED_MODULE_9__.slideMonths)();\r\n(0,_loadMonthDays_js__WEBPACK_IMPORTED_MODULE_10__.getCurrentStateDate)();\n\n//# sourceURL=webpack://modules/./js/index.js?");

/***/ }),

/***/ "./js/loadMonthDays.js":
/*!*****************************!*\
  !*** ./js/loadMonthDays.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentStateDate: () => (/* binding */ getCurrentStateDate)\n/* harmony export */ });\n/* harmony import */ var _getMonthWord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMonthWord.js */ \"./js/getMonthWord.js\");\n/* eslint-disable no-magic-numbers */\r\n\r\n\r\nconst today = new Date();\r\nconst currentDay = today.getDate();\r\nconst currentMonth = today.getMonth();\r\nconst currentYear = today.getFullYear();\r\nconsole.log(currentYear);\r\n\r\nconst MSinDay = 86400000;\r\nconst allCells = document.querySelectorAll('.day-number');\r\nconst weekLines = document.querySelectorAll('.weeks-line');\r\n\r\nfunction getCurrentStateDate() {\r\n  const currentStateMonth = document.querySelector('.current-month').dataset.value;\r\n  console.log(currentStateMonth);\r\n  const currentStateYear = document.querySelector('.year-item[selected=\"true\"]').value;\r\n  console.log(currentStateYear);\r\n\r\n  const needDate = new Date(`${currentStateMonth}, ${currentStateYear}`);\r\n  const month = needDate.getMonth();\r\n  const year = needDate.getFullYear();\r\n  const timeInMSFirstDayMonth = needDate.getTime();\r\n\r\n  const firstDayMonthInWeek = needDate.getDay();\r\n\r\n  let nextDayMS = timeInMSFirstDayMonth;\r\n  const objMonth = new Set();\r\n  for (let i = 0; i < 31; i++) {\r\n    const nexDayDate = new Date(nextDayMS);\r\n    const day = nexDayDate.getDate();\r\n    objMonth.add(day);\r\n\r\n    nextDayMS += MSinDay;\r\n  }\r\n\r\n  const monthArr = [];\r\n  Array.from(weekLines).forEach(week => {\r\n    monthArr.push([...week.children]);\r\n  });\r\n\r\n\r\n  let startCellIndex = 0;\r\n\r\n  Array.from(weekLines[0].children).forEach(day => {\r\n    if (+day.dataset.dayweek === firstDayMonthInWeek) {\r\n      startCellIndex = +day.dataset.dayweek;\r\n    }\r\n  });\r\n\r\n\r\n  allCells.forEach((cell) => {\r\n    cell.innerText = '';\r\n    cell.className = '';\r\n  })\r\n\r\n  for (let i = startCellIndex, y = 0; i < allCells.length; i++, y++) {\r\n    let cell;\r\n    if (i === 0) {\r\n      i = 7;\r\n      cell = allCells[i];\r\n    }\r\n\r\n    cell = allCells[i - 1];\r\n    if ([...objMonth][y] !== undefined) {\r\n      cell.innerText = [...objMonth][y];\r\n      cell.classList.add('day-number');\r\n    }\r\n  }\r\n\r\n  const newCell = [...document.querySelectorAll('.weeks-line>td')];\r\n  if (currentMonth === month && currentYear === year) {\r\n    newCell.forEach(cell => {\r\n      if (+cell.innerText === currentDay) {\r\n        cell.classList.add('today');\r\n      }\r\n    });\r\n  }\r\n\r\n  const first = new Date(`${(0,_getMonthWord_js__WEBPACK_IMPORTED_MODULE_0__.getMonthWord)(month)}, ${year}`);\r\n  let current = first;\r\n\r\n  for (let i = startCellIndex - 2; i >= 0; i--) {\r\n    const prevDay = new Date(current.getTime() - MSinDay);\r\n    if (newCell[i] !== undefined) {\r\n      newCell[i].innerText = prevDay.getDate();\r\n      newCell[i].classList.add('day-number');\r\n      newCell[i].classList.add('inactive-day');\r\n    }\r\n    current = prevDay;\r\n  }\r\n\r\n  if (startCellIndex === 0) {\r\n    for (let i = 5; i >= 0; i--) {\r\n      const prevDay = new Date(current.getTime() - MSinDay);\r\n      if (newCell[i] !== undefined) {\r\n        newCell[i].innerText = prevDay.getDate();\r\n        newCell[i].classList.add('day-number');\r\n        newCell[i].classList.add('inactive-day');\r\n      }\r\n      current = prevDay;\r\n    }\r\n  }\r\n\r\n  let counter = 1;\r\n  newCell.forEach((cell) => {\r\n    if (cell.innerHTML === '') {\r\n      cell.innerText = counter;\r\n      cell.classList.add('day-number');\r\n      cell.classList.add('inactive-day');\r\n      counter++;\r\n    }\r\n  });\r\n\r\n  const newWeekLines = document.querySelectorAll('.weeks-line');\r\n\r\n  [...newWeekLines].forEach(line => {\r\n    if (line.classList.contains('hidden')) {\r\n      line.classList.remove('hidden');\r\n    }\r\n  });\r\n  [...newWeekLines].forEach(line => {\r\n    if ([...line.children].every(item => item.classList.contains('inactive-day'))) {\r\n      line.classList.add('hidden');\r\n    }\r\n  })\r\n\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://modules/./js/loadMonthDays.js?");

/***/ }),

/***/ "./js/sliderMonths.js":
/*!****************************!*\
  !*** ./js/sliderMonths.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slideMonths: () => (/* binding */ slideMonths)\n/* harmony export */ });\n/* harmony import */ var _loadMonthDays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadMonthDays.js */ \"./js/loadMonthDays.js\");\n/* eslint-disable no-magic-numbers */\r\n\r\n\r\nconst monthsListEl = document.querySelectorAll('.month-item');\r\nconst yearsList = document.querySelector('.years-list');\r\nconst yearItemsList = document.querySelectorAll('.year-item');\r\n\r\nconst btnPrev = document.querySelector('.btn-prev');\r\nconst btnNext = document.querySelector('.btn-next');\r\nfunction slideMonths() {\r\n  btnNext.addEventListener('click', () => {\r\n\r\n    for (let i = 0; i < monthsListEl.length; i++) {\r\n      const month = monthsListEl[i];\r\n      let nextMonth = monthsListEl[i + 1];\r\n      if (!month.classList.contains('hidden')) {\r\n        if (i === 11) {\r\n          nextMonth = monthsListEl[0];\r\n\r\n          const selectedYear = document.querySelector(`.year-item[value=\"${yearsList.value}\"]`);\r\n          const curIndex = [...yearItemsList].indexOf(selectedYear);\r\n          selectedYear.removeAttribute('selected');\r\n          if (yearItemsList[curIndex + 1] !== undefined) {\r\n            yearItemsList[curIndex + 1].setAttribute('selected', true);\r\n            yearsList.value = yearItemsList[curIndex + 1].value;\r\n            (0,_loadMonthDays_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentStateDate)();\r\n          }\r\n\r\n        }\r\n        month.classList.add('hidden');\r\n        month.classList.remove('current-month');\r\n        nextMonth.classList.remove('hidden');\r\n        nextMonth.classList.add('current-month');\r\n        (0,_loadMonthDays_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentStateDate)();\r\n        break;\r\n      }\r\n    }\r\n  });\r\n\r\n  btnPrev.addEventListener('click', () => {\r\n    for (let i = monthsListEl.length - 1; i >= 0; i--) {\r\n      const month = monthsListEl[i];\r\n      let prevMonth = monthsListEl[i - 1];\r\n\r\n      if (!month.classList.contains('hidden')) {\r\n        if (i === 0) {\r\n          prevMonth = monthsListEl[11];\r\n\r\n          const selectedYear = document.querySelector(`.year-item[value=\"${yearsList.value}\"]`);\r\n          const curIndex = [...yearItemsList].indexOf(selectedYear);\r\n          selectedYear.removeAttribute('selected');\r\n          if (yearItemsList[curIndex - 1] !== undefined) {\r\n            yearItemsList[curIndex - 1].setAttribute('selected', true);\r\n            yearsList.value = yearItemsList[curIndex - 1].value;\r\n            (0,_loadMonthDays_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentStateDate)();\r\n          }\r\n        }\r\n        month.classList.add('hidden');\r\n        month.classList.remove('current-month');\r\n        prevMonth.classList.remove('hidden');\r\n        prevMonth.classList.add('current-month');\r\n        (0,_loadMonthDays_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentStateDate)();\r\n        break;\r\n      }\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://modules/./js/sliderMonths.js?");

/***/ }),

/***/ "./js/switchTheme.js":
/*!***************************!*\
  !*** ./js/switchTheme.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst switcher = document.getElementById('change-theme');\r\nconst label = document.querySelector('.change-theme_visual-btn');\r\nconst innerSwitcher = label.querySelector('.inner-switcher');\r\ninnerSwitcher.style.backgroundImage = `url('${'./img/icons/icons8-sun-30.png'}'), var(--bgCalendar)`;\r\n\r\ndocument.body.style.backgroundImage = `url('${'./img/1_3.png'}'), \r\nurl('${'./img/3_1.png'}'), \r\nurl('${'./img/5_3.png'}'), \r\nvar(--bg_Color)`;\r\n\r\nconst objDarkTheme = {\r\n  '--bg_Color': 'linear-gradient(180deg, #2d2d2d 0%, #19160F 100%)',\r\n  '--bgCalendar': 'linear-gradient(142.42deg, rgba(254, 248, 255, 18%) 1.79%, rgba(254, 248, 255, 17%) 100.42%)',\r\n  '--shadow_Calendar': 'inset -5px -5px 15px rgba(0, 0, 0, 0.46), inset 5px 5px 12px rgba(255, 255, 255, 0.46)',\r\n  '--bgBtn': 'rgba(248, 244, 251, 0.1)',\r\n  '--BgImage_Btn': `url('${'./img/icons/prev-dark.svg'}')`,\r\n  '--fontColor': '#FFFFFF',\r\n  '--dayName_fontColor': '#FFB876',\r\n  '--inactive_fontColor': 'rgba(255, 255, 255, 0.41)'\r\n}\r\n\r\nconst objLightTheme = {\r\n  '--bg_Color': 'linear-gradient(180deg, #F1F7FF 0%, #EDF2F9 100%)',\r\n  '--bgCalendar': 'linear-gradient(142.42deg, rgba(254, 248, 255, 18%) 1.79%, rgba(254, 248, 255, 17%) 100.42%)',\r\n  '--shadow_Calendar': 'inset -5px -5px 15px rgba(0, 0, 0, 0.12), inset 5px 5px 12px #FFFFFF',\r\n  '--bgBtn': 'rgba(71, 76, 89, 0.05)',\r\n  '--BgImage_Btn': `url('${'./img/icons/prev.svg'}')`,\r\n  '--fontColor': '#474C59',\r\n  '--dayName_fontColor': '#FF9330',\r\n  '--inactive_fontColor': 'rgba(52, 56, 65, 0.41)'\r\n}\r\n\r\nObject.keys(objLightTheme).forEach(key => {\r\n  document.documentElement.style.setProperty(key, objLightTheme[key]);\r\n});\r\n\r\nswitcher.addEventListener('change', () => {\r\n  label.classList.toggle('change-theme_visual-btn__dark');\r\n  label.classList.toggle('change-theme_visual-btn__light');\r\n  if (label.classList.contains('change-theme_visual-btn__dark')) {\r\n    innerSwitcher.style.animation = 'switcherThemeDark 0.3s ease-in-out 1 forwards';\r\n    label.style.animation = 'changeBgColor 0.3s ease-in 1 forwards';\r\n    innerSwitcher.style.backgroundImage = `url('${'./img/icons/icons8-night-30.png'}'), var(--bgCalendar)`;\r\n\r\n    Object.keys(objDarkTheme).forEach(key => {\r\n      document.documentElement.style.setProperty(key, objDarkTheme[key]);\r\n    });\r\n  }\r\n  if (label.classList.contains('change-theme_visual-btn__light')) {\r\n    innerSwitcher.style.animation = 'switcherThemeLight 0.3s ease-in-out 1 forwards';\r\n    label.style.animation = 'returnBgColor 0.3s ease-in-out 1 forwards';\r\n    innerSwitcher.style.backgroundImage = `url('${'./img/icons/icons8-sun-30.png'}'), var(--bgCalendar)`;\r\n    Object.keys(objLightTheme).forEach(key => {\r\n      document.documentElement.style.setProperty(key, objLightTheme[key]);\r\n    });\r\n  }\r\n});\n\n//# sourceURL=webpack://modules/./js/switchTheme.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;