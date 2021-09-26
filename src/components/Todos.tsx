import React from 'react';

const Todos: React.FC <{items: string[]}> = (props) => {
  // FC staat voor functional component en is hier het (generic) type
	return (
		<ul>
		{props.items.map((item) => (
      <li key={item}>{item}</li>
    ))}
		</ul>
	);
}
export default Todos;
