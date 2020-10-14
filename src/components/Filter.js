import React from 'react';
import { Container} from 'react-bootstrap';
const Footer = (props) => {

  const onSubmitAll = () => {
    var newArrayTask = props.items.filter(item => item.status ===  false || true);
    props.setListTask(newArrayTask);
    console.log('All item',newArrayTask );
  }

  const onSubmitActive = () => {
    var newArrayTask = props.items.filter(item => item.status === false);
    props.setListTask(newArrayTask);
    console.log('Active item', newArrayTask);
  }

  const onSubmitComplete = () => {
    var newArrayTask = props.items.filter(item => item.status === true);
    props.setListTask(newArrayTask);
    console.log('Complete item', newArrayTask);
  }

  const onSubmitClear = () => {
    var newArrayTask = props.items.filter(item => item.status !== true);
    props.setItems(newArrayTask);
    props.setListTask(newArrayTask);
    console.log('Clear item', newArrayTask);
  }

  return (
    <Container className='footer'>
      <ul>
        <li>{props.items.length} item left</li>
        <li><button onClick={()=>onSubmitAll()}>All</button></li>
        <li><button onClick={()=>onSubmitActive()}>Active</button></li>
        <li><button onClick={()=>onSubmitComplete()}>Completed</button></li>
        <li><button onClick={()=>onSubmitClear()}>Clear all task completed</button></li>
      </ul>
    </Container>
  );
}
export default Footer;
