import React, { useState } from 'react';
import * as S from './AddTodo.styles';
import { TodoContext } from '../../contexts/TodoContext';
import { useContext } from 'react';


const AddTodo: React.FC = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText  ] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      setError('Поле не может быть пустым');
      return;
    }
      
addTodo(text)
    setError('');
    setText('');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <S.Input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError(''); //нихуя не ввоят ошибка принимается
          }}
          placeholder="Введите новую задачу..."
          $hasError={!!error}
        />
        <S.AddButton type="submit" disabled={!text.trim()}>
          Добавить
        </S.AddButton>
      </S.InputWrapper>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Form>
  );
};

export default AddTodo;