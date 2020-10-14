import React from 'react';
import { Container ,ListGroup} from 'react-bootstrap';
import './Style.css';
const TodoItem = (props) => {
  return (
    <Container className='todoitem'>
      <ListGroup variant="flush">
        <ListGroup.Item >
          <input type='checkbox' id='myCheck' checked={props.item.status === true}
          onClick={() => props.onToggleStatus(props.item.id)} />
          <label id='content'>
          {props.item.status ? (<span className='colorGray'><strike>{props.item.content}
          </strike></span>):props.item.content}
          </label>
          <button className='DeleteHide' type='button' onClick={() => props.onSubmitDelete
          (props.item.id)}>Delete</button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
export default TodoItem;
