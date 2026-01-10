const htmlElement = document.documentElement;
const themeRadios = document.querySelectorAll('input[name="theme"]');

function updateThemeRadios() {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
  themeRadios.forEach(radio => {
    radio.checked = radio.value === currentTheme;
  });
}

updateThemeRadios();

themeRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    const theme = e.target.value;
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});