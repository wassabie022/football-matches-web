// src/telegram-mock.js

const TelegramMock = {
    initData: 'hash=dummyhash',
    initDataUnsafe: {
      user: {
        id: 123456789,
        is_bot: false,
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe',
        language_code: 'en',
      },
      query_id: 'dummy_query_id',
      auth_date: 1617181723,
      hash: 'dummyhash',
    },
    user: {
      id: 123456789,
      is_bot: false,
      first_name: 'John',
      last_name: 'Doe',
      username: 'johndoe',
      language_code: 'en',
    },
    platform: 'web',
    colorScheme: 'light',
    MainButton: {
      text: 'Main Button',
      color: 'primary',
      isVisible: false,
      isActive: false,
      clickCallback: null, // Добавляем свойство для хранения callback
  
      show: function () {
        this.isVisible = true;
        // Добавьте логику отображения кнопки в вашем UI
        if (typeof window.updateMainButtonState === 'function') {
          window.updateMainButtonState();
        }
      },
      hide: function () {
        this.isVisible = false;
        // Добавьте логику скрытия кнопки в вашем UI
        if (typeof window.updateMainButtonState === 'function') {
          window.updateMainButtonState();
        }
      },
      setText: function (text) {
        this.text = text;
        // Обновите текст кнопки в вашем UI
        if (typeof window.updateMainButtonState === 'function') {
          window.updateMainButtonState();
        }
      },
      onClick: function (callback) {
        // Сохраняем callback в свойство clickCallback
        this.clickCallback = callback;
        // Также сохраняем его в глобальную переменную для доступа из UI
        window.mainButtonClickCallback = callback;
      },
      triggerClick: function () {
        // Метод для эмуляции клика на кнопку
        if (this.clickCallback && typeof this.clickCallback === 'function') {
          this.clickCallback();
        }
      },
    },
    onEvent: function (event, callback) {
      // Реализуйте логику обработки событий
      window[`on${event}`] = callback;
    },
    sendData: function (data) {
      console.log('Data sent to Telegram:', data);
      // Реализуйте логику отправки данных
    },
    openLink: function (url) {
      window.open(url, '_blank');
    },
  };
  
  // Логирование для проверки инициализации
  console.log('TelegramMock инициализирован');
  
  if (typeof window !== 'undefined' && !window.Telegram) {
    window.Telegram = TelegramMock;
  }
  
  export default TelegramMock;
  