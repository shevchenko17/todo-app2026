
import React, { useState } from 'react';
import { useTodos } from '../../contexts/TodoContext';
import EditTodo from '../EditTodo/EditTodo';
import type { Todo } from '../../types/todo';
import * as S from './TodoItem.styles';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { toggleTodo, deleteTodo, editTodo } = useTodos();

  const handleSave = (newText: string) => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      deleteTodo(todo.id);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isEditing) {
    return (
      <S.ItemContainer>
        <EditTodo
          initialText={todo.text}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </S.ItemContainer>
    );
  }

  return (
    <S.ItemContainer>
      <S.CheckboxContainer>
        <S.Checkbox
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          aria-label={todo.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
        />
      </S.CheckboxContainer>

      <S.Content $completed={todo.completed}>
        <S.Text>{todo.text}</S.Text>
        <S.Date>{formatDate(todo.createdAt)}</S.Date>
      </S.Content>

      <S.Actions>
        <S.EditButton
          onClick={() => setIsEditing(true)}
          title="Редактировать задачу"
          aria-label="Редактировать задачу"
        >
          <S.EditIcon>✏️</S.EditIcon>
          Редактировать
        </S.EditButton>
        
        <S.DeleteButton
          onClick={handleDelete}
          title="Удалить задачу"
          aria-label="Удалить задачу"
        >
          <S.DeleteIcon>🗑️</S.DeleteIcon>
          Удалить
        </S.DeleteButton>
      </S.Actions>
    </S.ItemContainer>
  );
};

export default TodoItem;