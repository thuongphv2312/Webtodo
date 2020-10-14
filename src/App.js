import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import Todos from './components/Todos';
import Filter from './components/Filter';
import { Container } from 'react-bootstrap';
function App() {

  const [items, setItems] = useState([]);
  const [listtask, setListTask] = useState([]);

  useEffect(() => {
    setListTask(items);
  }, [items])

  const onSubmit = (task) => {
    var number = Math.random() // 0.9394456857981651
    number.toString(36); // '0.xtis06h6'
    var id = number.toString(36).substr(2, 9); // 'xtis06h6'
    const todoTask = {
      id: id,
      status: false,
      content: task,
    }
    const validate = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (task.match(validate) === null) {
      setItems([...items, todoTask]);
    }
    else {
      alert('invalid input !!!');
    }
  }

  const onSubmitDelete = (id) => {
    const data = items.filter(e => e.id !==  id)
    setItems(data);
  }

  const onToggleStatus = (id) => {
    const newlist = items.map(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    })
    setItems(newlist);
  }

  return (
    <div className='border'>
      <Container>
        <InputForm onSubmit={onSubmit}/>
        <Todos items={listtask} onSubmitDelete={onSubmitDelete} onToggleStatus={onToggleStatus}  />
        <Filter items={items} setItems={setItems} status={items.status} setListTask={setListTask}/>
      </Container>
    </div>
  );
}

export default App;
