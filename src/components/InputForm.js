import React, { useState } from 'react';
import { Button, Container,Form ,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const InputForm = (props) => {
  const [task, setTask] = useState('');
  return (
    <Container className='inputForm'>
      <Form inline>
        <FormControl type="text" placeholder="Type your task" className=" mr-sm-2" onChange={(e) => setTask(e.target.value)} value={task}/>
        <Button onClick={() =>
        { props.onSubmit(task);setTask('')}}>Add</Button>
      </Form>
    </Container>
  );
}
export default InputForm;
