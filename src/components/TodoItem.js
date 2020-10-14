import React from 'react';
import './Style.css';
const TodoItem = (props) => {
  return (
    <div>
      <div className='listItems'>
        <input type='checkbox' id='myCheck' checked={props.item.status === true} onClick={() => props.onToggleStatus(props.item.id)} />
        <label id='content'>
          {props.item.status ? (<span className='colorGray'><strike>{props.item.content}</strike></span>):props.item.content}
        </label>
        <button className='DeleteHide' type='button' onClick={() => props.onSubmitDelete(props.item.id)}>Delete</button>
      </div>
    </div>
  );
}
export default TodoItem;
