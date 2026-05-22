// Сохраняет настройки в chrome.storage
function saveOptions() {
  const engine = document.getElementById('engine').value;
  chrome.storage.sync.set({ searchEngine: engine }, () => {
    const status = document.getElementById('status');
    status.textContent = 'Настройки сохранены!';
    setTimeout(() => {
      status.textContent = '';
    }, 1500);
  });
}

// Восстанавливает настройки при открытии страницы
function restoreOptions() {
  chrome.storage.sync.get({ searchEngine: 'google' }, (items) => {
    document.getElementById('engine').value = items.searchEngine;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('engine').addEventListener('change', saveOptions);