import React from 'react';
import { Container ,ListGroup} from 'react-bootstrap';
import './Style.css';
const TodoItems = ({ item, onToggleChangeStatus, onDelete }) => {
  return (
    <Container className='todoitem'>
      <ListGroup variant="flush">
        <ListGroup.Item >
          <input type='checkbox' id='myCheck' checked={item.status === true}
          onClick={() => onToggleChangeStatus(item.id)} />
          <label id='content'>
          {item.status ? (<span className='colorGray'><strike>{item.content}
          </strike></span>):item.content}
          </label>
          <button className='DeleteHide' type='button' onClick={() => onDelete
          (item.id)}>Delete</button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
export default TodoItems;
