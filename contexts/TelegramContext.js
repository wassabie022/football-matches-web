// src/contexts/TelegramContext.js

import React, { createContext, useContext } from 'react';
import TelegramMock from '../telegram-mock';

// Создаём контекст с начальным значением либо реальным объектом Telegram, либо моком
const TelegramContext = createContext(window.Telegram || TelegramMock);

// Пользовательский хук для доступа к контексту Telegram
export const useTelegram = () => useContext(TelegramContext);

// Провайдер для оборачивания приложения и предоставления контекста
export const TelegramProvider = ({ children }) => {
  return (
    <TelegramContext.Provider value={window.Telegram || TelegramMock}>
      {children}
    </TelegramContext.Provider>
  );
};
