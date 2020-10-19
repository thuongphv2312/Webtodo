import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import Todos from './components/Todos';
import Filter from './components/Filter';
import { Container } from 'react-bootstrap';
export const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

function App() {

  const [items, setItems] = useState([]);

  const [filter, setFilter] = useState('all');

  const onFilterChange = (fil) => {
    setFilter(fil);
  };

  const validate = /^[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]*$/;

  const onAdd = (task) => {
    const number = Math.random(); // 0.9394456857981651
    number.toString(36); // '0.xtis06h6'
    const id = number.toString(36).substr(2, 9); // 'xtis06h6'
    const todoTask = {
      id,
      content: task,
      status: false,
    };
    if (task.match(validate) === null) {
      setItems([...items, todoTask]);
    } else { alert('in valid input'); }
  };


  const onDelete = (id) => {
    setItems([...items.filter((item) => item.id !== id)]);
  };

  const onToggleChangeStatus = (id) => {
    setItems(items.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    }));
  };

  const onToggleClearAllComplete = () => {
    setItems([...items.filter((item) => item.status !== true)]);
  };

  return (
    <div className='border'>
      <Container>
        <InputForm onAdd={onAdd}/>
        <Todos items={items} onDelete={onDelete}
          filter={filter}
          onToggleChangeStatus={onToggleChangeStatus} setItems={setItems}/>
        <Filter items={items} onChange={onFilterChange} status={items.status} onToggleClearAllComplete={onToggleClearAllComplete}/>
      </Container>
    </div>
  );
}

export default App;
