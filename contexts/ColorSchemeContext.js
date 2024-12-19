// src/contexts/ColorSchemeContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import TelegramMock from '../telegram-mock';

// Создаём контекст для цветовой схемы с начальными значениями
const ColorSchemeContext = createContext({
  colorScheme: 'light',
  setColorScheme: () => {},
});

// Пользовательский хук для доступа к контексту цветовой схемы
export const useColorScheme = () => useContext(ColorSchemeContext);

// Провайдер для управления и предоставления цветовой схемы
export const ColorSchemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(
    window.Telegram ? window.Telegram.colorScheme : 'light'
  );

  useEffect(() => {
    if (window.Telegram) {
      // Функция обновления цветовой схемы, вызываемая из мока
      window.updateColorScheme = () => {
        setColorScheme(window.Telegram.colorScheme);
      };
    }

    // Очистка при размонтировании
    return () => {
      if (window.Telegram) {
        window.updateColorScheme = null;
      }
    };
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
