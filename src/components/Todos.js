import React from 'react';
import TodoItem from './TodoItem';
const Todos = (props) => {
  return (
    <div>
      {props.items.map((item) => <TodoItem key={item.id} items={props.items} item={item} onSubmitDelete={props.onSubmitDelete} onToggleStatus={props.onToggleStatus}/>).reverse()}
    </div>
  );
}
export default Todos;
