import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Todo, TodoContextType } from '../types/todo';

export const TodoContext = createContext<TodoContextType | null>(null);



export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
 

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
      
        return parsedTodos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
      } catch (error) {
        console.error('Ошибка загрузки задач из localStorage:', error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Ошибка сохранения задач в localStorage:', error);
    }
  }, [todos]);

  
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(), // Используем timestamp как ID
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  
  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  
  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };


  const markAllCompleted = () => {
    setTodos(prevTodos =>
      prevTodos.map(todo => ({ ...todo, completed: true }))
    );
  };

  
  const markAllIncomplete = () => {
    setTodos(prevTodos =>
      prevTodos.map(todo => ({ ...todo, completed: false }))
    );
  };

  const contextValue: TodoContextType = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    markAllCompleted,
    markAllIncomplete,
  };

  return (
    <TodoContext.Provider value={contextValue}> // мозги тудушки
      {children}
    </TodoContext.Provider>
  );
};