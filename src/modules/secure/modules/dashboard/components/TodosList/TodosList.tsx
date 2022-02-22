import { FC } from 'react';
import { Todo } from '@shared/services/todo/todo.models';

interface Props {
  todos: Todo[];
  onSelectTodo: (todo: Todo) => void;
}

const TodosList: FC<Props> = props => {
  return (
    <ul>
      {props.todos?.map(todo => (
        <li key={todo?._id} onClick={() => props.onSelectTodo(todo)}>
          {todo?.description}
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
