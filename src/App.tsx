import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext';
import { TodoProvider } from './contexts/TodoContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { useTheme } from './contexts/ThemeContext';

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <TodoList />
    </ThemeProvider>
  );
};
const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <TodoProvider>
        <ThemedApp />
      </TodoProvider>
    </CustomThemeProvider>
  );
};

export default App;