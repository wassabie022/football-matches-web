// src/components/MainButton.js

import React, { useEffect, useState } from 'react';
import './MainButton.css';

const MainButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('Main Button');

  useEffect(() => {
    if (window.Telegram) {
      const { MainButton } = window.Telegram;

      const updateButton = () => {
        setIsVisible(MainButton.isVisible);
        setText(MainButton.text);
      };

      // Сохраняем функцию обновления в глобальном объекте для доступа из мока
      window.updateMainButtonState = updateButton;

      // Первоначальная настройка кнопки
      updateButton();

      // Очистка при размонтировании
      return () => {
        window.updateMainButtonState = null;
      };
    }
  }, []);

  const handleClick = () => {
    if (window.Telegram && window.Telegram.MainButton.clickCallback) {
      window.Telegram.MainButton.clickCallback();
    }
  };

  if (!isVisible) return null;

  return (
    <button className="main-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default MainButton;
