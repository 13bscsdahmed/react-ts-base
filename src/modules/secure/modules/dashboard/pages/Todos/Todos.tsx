import { FC, useEffect, useState } from 'react';
import { Todo } from '@shared/services/todo/todo.models';
import TodosList from '@modules/secure/modules/dashboard/components/TodosList/TodosList';
import { useDispatch, useSelector } from 'react-redux';
import { todoActionTypes, selectAllTodos } from '@store/slices';

const Todos: FC<{}> = () => {
  const dispatch = useDispatch();
  const fetchedTodos: Todo[] = useSelector(selectAllTodos);
  useEffect(() => {
    dispatch({ type: todoActionTypes.FETCH_TODOS });
  }, [dispatch]);

  const selectTodo = (todo: Todo) => {
    console.log('todo selected', todo);
  };

  return <TodosList todos={fetchedTodos} onSelectTodo={selectTodo} />;
};

export default Todos;
