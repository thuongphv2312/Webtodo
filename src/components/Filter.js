import React from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { FILTERS } from '../App';
const Filter = ({ onChange, onToggleClearAllComplete }) => {
  return (
    <Container>
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" style={{ color: 'white' }} onClick={() => onChange(FILTERS.ALL)}>All</Button>
      <Button variant="secondary" onClick={() => onChange(FILTERS.ACTIVE)}>Active</Button>
      <Button variant="secondary" onClick={() => onChange(FILTERS.COMPLETED)}>Completed</Button>
      <Button variant="secondary" onClick={() => onToggleClearAllComplete()}>Clear all task completed</Button>
    </ButtonGroup>
  </Container>
  );
}
export default Filter;
