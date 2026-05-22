// Базовые поисковые движки по умолчанию
const SEARCH_ENGINES = {
  google: "https://www.google.com/search?q=",
  yandex: "https://yandex.ru/search/?text=",
  bing: "https://www.bing.com/search?q=",
  youtube: "https://www.youtube.com/results?search_query="
};

chrome.commands.onCommand.addListener((command) => {
  if (command === "search-selection") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (!activeTab || !activeTab.url) return;

      const restrictedPrefixes = [
        "chrome://",
        "https://chrome.google.com/",
        "chrome-extension://",
        "edge://",
        "about:"
      ];
      if (restrictedPrefixes.some(prefix => activeTab.url.startsWith(prefix))) {
        console.warn("Search Selection cannot run on internal/store pages.");
        return;
      }

      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        func: () => window.getSelection().toString()
      })
      .then((results) => {
        if (!results || !results[0]) return;

        let selection = results[0].result;
        if (selection && selection.trim().length > 0) {
          
          // 1. УМНАЯ ОЧИСТКА ТЕКСТА: заменяем любые переносы строк, табы и множественные пробелы на один обычный пробел
          const cleanedQuery = selection.replace(/\s+/g, ' ').trim();
          const encodedQuery = encodeURIComponent(cleanedQuery);

          // 2. ВЫБОР ПОИСКОВОГО ДВИЖКА: берем из хранилища или используем google по умолчанию
          chrome.storage.sync.get({ searchEngine: 'google' }, (items) => {
            const baseUrl = SEARCH_ENGINES[items.searchEngine] || SEARCH_ENGINES.google;
            const finalUrl = baseUrl + encodedQuery;

            // 3. ОТКРЫТИЕ РЯДОМ С ТЕКУЩЕЙ ВКЛАДКОЙ
            chrome.tabs.create({ 
              url: finalUrl,
              index: activeTab.index + 1, // Открывает строго справа
              active: true // Можно поменять на false, если хочешь открывать в фоне
            });
          });
        }
      })
      .catch((err) => {
        console.error("Script injection failed: ", err);
      });
    });
  }
});