import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import * as S from './Header.styles';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.HeaderContainer>
      <S.Logo>
        <S.LogoIcon>✓</S.LogoIcon>
        <S.Title>To-Do List</S.Title>
      </S.Logo>
      
      <S.ThemeToggle 
        onClick={toggleTheme}
        aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
        title={`Текущая тема: ${theme === 'light' ? 'светлая' : 'тёмная'}`}
      >
        <S.ThemeIcon>
          {theme === 'light' ? '🌙' : '☀️'}
        </S.ThemeIcon>
        <S.ThemeText>
          {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        </S.ThemeText>
      </S.ThemeToggle>
    </S.HeaderContainer>
  );
};

export default Header;