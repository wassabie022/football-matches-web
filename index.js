// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Изменили импорт
import App from './App';
import { TelegramProvider } from './contexts/TelegramContext';
import { ColorSchemeProvider } from './contexts/ColorSchemeContext';

// Создаем корень с использованием createRoot
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Рендерим приложение внутри провайдеров контекстов
root.render(
  <React.StrictMode>
    <TelegramProvider>
      <ColorSchemeProvider>
        <App />
      </ColorSchemeProvider>
    </TelegramProvider>
  </React.StrictMode>
);
