// js/toggle-theme.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleMode');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    toggleButton.textContent = body.classList.contains('dark-mode')
      ? 'Mudar para Modo Claro'
      : 'Mudar para Modo Escuro';
  });
});
