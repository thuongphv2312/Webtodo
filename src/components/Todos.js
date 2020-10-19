import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FILTERS } from '../App';
import TodoItems from './TodoItems';
const Todos = ({
  onToggleChangeStatus, items, filter, onDelete,
}) => {
  const filteredItems = () => {
    switch (filter) {
      case FILTERS.ALL: {
        return items;
      }
      case FILTERS.ACTIVE: {
        return items.filter((item) => item.status !== true);
      }
      case FILTERS.COMPLETED: {
        return items.filter((item) => item.status === true);
      }
      default:
        return items;
    }
  };
  return (
    <Container>
      {filteredItems().map((item) => <TodoItems key={item.id} item={item} onDelete={onDelete} onToggleChangeStatus={onToggleChangeStatus} />)}
    </Container>
  );
}
export default Todos;
