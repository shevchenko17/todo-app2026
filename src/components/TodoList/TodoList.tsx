import React, { useState } from 'react';
import { useTodos }  from '../../contexts/TodoContext';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from   '../TodoItem/Todoitem';    
import type { Todo, SortOption, FilterOption } from '../../types/todo';
import * as S from './TodoList.styles';

const TodoList: React.FC = () => {
  const { todos } = useTodos();
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [filterOption, setFilterOption] = useState<FilterOption>('all');

  const sortTodos = (todosToSort: Todo[]) => {
    return [...todosToSort].sort((a, b) => {
      if (sortOption === 'newest') {
        return b.createdAt.getTime() - a.createdAt.getTime();
      } else {
        return a.createdAt.getTime() - b.createdAt.getTime();
      }
    });
  };

  const filterTodos = (todosToFilter: Todo[]) => {
    switch (filterOption) {
      case 'active':
        return todosToFilter.filter(todo => !todo.completed);
      case 'completed':
        return todosToFilter.filter(todo => todo.completed);
      default:
        return todosToFilter;
    }
  };

  const filteredAndSortedTodos = sortTodos(filterTodos(todos));

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <S.Container>
      <S.Header>
        <S.Title>Список задач</S.Title>
        <S.Stats>
          Активных: {activeTodosCount} | Выполненных: {completedTodosCount} | Всего: {todos.length}
        </S.Stats>
      </S.Header>

      <AddTodo />

      <S.Controls>
        <S.SelectGroup>
          <S.Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            aria-label="Сортировка задач"
          >
            <option value="newest">Сначала новые</option>
            <option value="oldest">Сначала старые</option>
          </S.Select>

          <S.Select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value as FilterOption)}
            aria-label="Фильтрация задач"
          >
            <option value="all">Все задачи</option>
            <option value="active">Активные</option>
            <option value="completed">Выполненные</option>
          </S.Select>
        </S.SelectGroup>
      </S.Controls>

      {filteredAndSortedTodos.length === 0 ? (
        <S.EmptyState>
          {todos.length === 0 
            ? 'Задачи отсутствуют. Добавьте первую задачу!' 
            : 'Задачи не найдены по выбранному фильтру'}
        </S.EmptyState>
      ) : (
        <S.List>
          {filteredAndSortedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </S.List>
      )}
    </S.Container>
  );
};

export default TodoList;