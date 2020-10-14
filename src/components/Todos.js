import React from 'react';
import { Container } from 'react-bootstrap';
import TodoItem from './TodoItem';
const Todos = (props) => {
  return (
    <Container>
      {props.items.map((item) => <TodoItem key={item.id} items={props.items} item={item} onSubmitDelete={props.onSubmitDelete} onToggleStatus={props.onToggleStatus}/>).reverse()}
    </Container>
  );
}
export default Todos;
