export const themeList = [
  {
    id: 1,
    name: 'Dusky',
    foreground_color: '#026670',
    background_color: '#edeae5',
    font_color: '#000',
  },
  {
    id: 2,
    name: 'B/W',
    foreground_color: '#000',
    background_color: '#fff',
    font_color: '#000',
  },
  {
    id: 3,
    name: 'simple green',
    foreground_color: '#00887a',
    background_color: '#fff',
    font_color: '#000',
  },
  {
    id: 4,
    name: 'Grand',
    foreground_color: '#cb734d',
    background_color: '#1c1f24',
    font_color: '#fff',
  },
  {
    id: 5,
    name: 'Fearless',
    foreground_color: '#c96567',
    background_color: '#314455',
    font_color: '#fff',
  },
];

export const setTheme = (theme) => {
  if (theme) {
    document.querySelector('body').style.setProperty('--foreground-color', theme.foreground_color);
    document.querySelector('body').style.setProperty('--background-color', theme.background_color);
    document.querySelector('body').style.setProperty('--text-color', theme.font_color);
  }
};
