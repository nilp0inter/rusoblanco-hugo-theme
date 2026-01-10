const htmlElement = document.documentElement;
const themeRadios = document.querySelectorAll('input[name="theme"]');

function updateThemeRadios() {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
  themeRadios.forEach(radio => {
    radio.checked = radio.value === currentTheme;
  });
}

function updateUtterancesTheme(theme) {
  const utterancesFrame = document.querySelector('iframe.utterances-frame');
  if (utterancesFrame) {
    const utterancesTheme = theme === 'dark' ? 'github-dark' : 'github-light';
    utterancesFrame.contentWindow.postMessage(
      { type: 'set-theme', theme: utterancesTheme },
      'https://utteranc.es'
    );
  }
}

function waitForUtterancesAndSetTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
  const checkForFrame = setInterval(() => {
    const utterancesFrame = document.querySelector('iframe.utterances-frame');
    if (utterancesFrame) {
      clearInterval(checkForFrame);
      updateUtterancesTheme(currentTheme);
    }
  }, 100);
  // Stop checking after 10 seconds
  setTimeout(() => clearInterval(checkForFrame), 10000);
}

updateThemeRadios();
waitForUtterancesAndSetTheme();

themeRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    const theme = e.target.value;
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateUtterancesTheme(theme);
  });
});