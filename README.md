# Search Selection

A minimalist and fast browser extension (Manifest V3) that allows you to instantly search selected text in your favorite search engine using hotkeys.

## 🚀 Features

* **One-Click Search:** Just select any text and press `Alt + S` (`Option + S` on Mac).
* **Smart Text Cleaning:** Automatically removes extra line breaks, tabs, and multiple spaces, turning them into a clean search query.
* **Open Next to Current Tab:** The new results tab opens strictly to the right of your current tab, rather than at the very end of the tab bar.
* **Custom Search Engines:** Choose your default search engine (Google, Yandex, Bing, YouTube) via the options page.
* **Security & Stability:** The extension doesn't run on internal browser pages (`chrome://`, `about:`) or web stores to prevent script injection errors.

## 📁 Project Structure

* `manifest.json` — extension configuration file containing permissions (`activeTab`, `scripting`, `storage`) and the registered shortcut command.
* `background.js` — Service Worker that listens for hotkeys, extracts selected text from the page, and manages tabs.
* `options.html` & `options.js` — options page UI and logic for switching the search engine.

## 🛠 Installation

The extension is built on the modern **Manifest V3** standard and can be installed in any Chromium-based browser (Google Chrome, Microsoft Edge, Brave, Opera, Vivaldi, etc.).

1. Download or clone this repository to your computer.
2. Open your browser and navigate to the extensions management page: `chrome://extensions/`.
3. Enable **Developer mode** using the toggle switch in the top right corner.
4. Click the **Load unpacked** button in the top left corner.
5. Select the folder containing the extension files.

## ⚙️ Configuration

### Changing the Search Engine:
1. Right-click the extension icon on the browser toolbar (or find it in your installed extensions list).
2. Select **Options**.
3. Choose your preferred search engine from the dropdown list. Changes are saved automatically.

### Changing Hotkeys:
If `Alt + S` is inconvenient or conflicts with other software:
1. Go to `chrome://extensions/shortcuts`.
2. Locate **Search Selection** in the list.
3. Assign any shortcut combination you prefer.

## 📝 License

MIT License. Free to use, modify, and distribute.

---

# Search Selection (RU)

Минималистичное и быстрое браузерное расширение (Manifest V3), которое позволит мгновенно искать выделенный текст в любимой поисковой системе с помощью горячих клавиш.

## 🚀 Возможности

* **Поиск по 1 кнопке:** Просто выдели текст и нажми `Alt + S` (или `Option + S` на Mac).
* **Умная очистка текста:** Автоматически удаляет лишние переносы строк, табы и множественные пробелы, превращая их в аккуратный поисковый запрос.
* **Открытие рядом:** Новая вкладка с результатами открывается строго справа от текущей, а не в самом конце панели вкладок.
* **Кастомизация систем поиска:** Возможность выбора поисковой системы по умолчанию (Google, Яндекс, Bing, YouTube) через страницу параметров.
* **Безопасность:** Расширение не работает на внутренних страницах браузера (`chrome://`, `about:`) и в магазинах расширений для предотвращения ошибок инъекции скриптов.

## 📁 Структура проекта

* `manifest.json` — конфигурационный файл расширения с правами доступа (`activeTab`, `scripting`, `storage`) и зарегистрированной командой.
* `background.js` — Service Worker, который слушает хоткеи, считывает выделенный текст со страницы и управляет вкладками.
* `options.html` & `options.js` — страница настроек для переключения поискового движка.

## 🛠 Установка

Расширение создано на базе актуального стандарта **Manifest V3** и может быть установлено в любой Chromium-совместимый браузер (Google Chrome, Edge, Brave, Opera, Яндекс.Браузер).

1. Скачай или клонируй этот репозиторий к себе на компьютер.
2. Открой браузер и перейди на страницу управления расширениями: `chrome://extensions/`.
3. Включи **Режим разработчика** (Developer mode) с помощью переключателя в правом верхнем углу.
4. Нажми кнопку **Загрузить распакованное расширение** (Load unpacked) в левом верхнем углу.
5. Выбери папку с файлами расширения.

## ⚙️ Настройка

### Изменение поискового движка:
1. Кликни правой кнопкой мыши по иконке расширения на панели браузера (или найди его в списке установленных).
2. Выбери **Параметры** (Options).
3. В выпадающем списке выбери нужный поисковик. Изменения сохраняются автоматически.

### Изменение горячих клавиш:
Если комбинация `Alt + S` тебе неудобна или конфликтует с другими программами:
1. Перейди по ссылке `chrome://extensions/shortcuts`.
2. Найди в списке **Search Selection**.
3. Назначь любое удобное сочетание клавиш.

## 📝 Лицензия

MIT License. Свободно для использования и модификации.