import './../img/1_3.png';
import './../img/3_1.png';
import './../img/5_3.png';
// import './../img/icons/favicon.ico';
import './../img/icons/icons8-night-30.png';
import './../img/icons/icons8-sun-30.png';
import './../img/icons/prev.svg';
import './../img/icons/prev-dark.svg';

import '../scss/style.scss';
// import { getMonthWord } from './getMonthWord.js';
import { getTodayDate } from './getTodayDate.js';
import { slideMonths } from './sliderMonths.js';
import { getCurrentStateDate } from './loadMonthDays.js';
import './switchTheme.js';

getTodayDate();
slideMonths();
getCurrentStateDate();