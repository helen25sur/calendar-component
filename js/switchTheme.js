const switcher = document.getElementById('change-theme');
const label = document.querySelector('.change-theme_visual-btn');
const innerSwitcher = label.querySelector('.inner-switcher');
innerSwitcher.style.backgroundImage = `url('${'./img/icons/icons8-sun-30.png'}'), var(--bgCalendar)`;

document.body.style.backgroundImage = `url('${'../img/1_3.png'}'), 
url('${'../img/3_1.png'}'), 
url('${'../img/5_3.png'}'), 
var(--bg_Color)`;

const objDarkTheme = {
  '--bg_Color': 'linear-gradient(180deg, #2d2d2d 0%, #19160F 100%)',
  '--bgCalendar': 'linear-gradient(142.42deg, rgba(254, 248, 255, 18%) 1.79%, rgba(254, 248, 255, 17%) 100.42%)',
  '--shadow_Calendar': 'inset -5px -5px 15px rgba(0, 0, 0, 0.46), inset 5px 5px 12px rgba(255, 255, 255, 0.46)',
  '--bgBtn': 'rgba(248, 244, 251, 0.1)',
  '--BgImage_Btn': `url('${'./img/icons/prev-dark.svg'}')`,
  '--fontColor': '#FFFFFF',
  '--dayName_fontColor': '#FFB876',
  '--inactive_fontColor': 'rgba(255, 255, 255, 0.41)'
}

const objLightTheme = {
  '--bg_Color': 'linear-gradient(180deg, #F1F7FF 0%, #EDF2F9 100%)',
  '--bgCalendar': 'linear-gradient(142.42deg, rgba(254, 248, 255, 18%) 1.79%, rgba(254, 248, 255, 17%) 100.42%)',
  '--shadow_Calendar': 'inset -5px -5px 15px rgba(0, 0, 0, 0.12), inset 5px 5px 12px #FFFFFF',
  '--bgBtn': 'rgba(71, 76, 89, 0.05)',
  '--BgImage_Btn': `url('${'./img/icons/prev.svg'}')`,
  '--fontColor': '#474C59',
  '--dayName_fontColor': '#FF9330',
  '--inactive_fontColor': 'rgba(52, 56, 65, 0.41)'
}

Object.keys(objLightTheme).forEach(key => {
  document.documentElement.style.setProperty(key, objLightTheme[key]);
});

switcher.addEventListener('change', () => {
  label.classList.toggle('change-theme_visual-btn__dark');
  label.classList.toggle('change-theme_visual-btn__light');
  if (label.classList.contains('change-theme_visual-btn__dark')) {
    innerSwitcher.style.animation = 'switcherThemeDark 0.3s ease-in-out 1 forwards';
    label.style.animation = 'changeBgColor 0.3s ease-in 1 forwards';
    innerSwitcher.style.backgroundImage = `url('${'./img/icons/icons8-night-30.png'}'), var(--bgCalendar)`;

    Object.keys(objDarkTheme).forEach(key => {
      document.documentElement.style.setProperty(key, objDarkTheme[key]);
    });
  }
  if (label.classList.contains('change-theme_visual-btn__light')) {
    innerSwitcher.style.animation = 'switcherThemeLight 0.3s ease-in-out 1 forwards';
    label.style.animation = 'returnBgColor 0.3s ease-in-out 1 forwards';
    innerSwitcher.style.backgroundImage = `url('${'./img/icons/icons8-sun-30.png'}'), var(--bgCalendar)`;
    Object.keys(objLightTheme).forEach(key => {
      document.documentElement.style.setProperty(key, objLightTheme[key]);
    });
  }
});