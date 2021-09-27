
import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC <{items: Todo[]}> = (props) => {
  // FC staat voor functional component en is hier het (generic) type
	return (
		<ul>
		{props.items.map((item) => (
      < TodoItem key={item.id} text={item.text}/>
    ))}
		</ul>
	);
}
export default Todos;
