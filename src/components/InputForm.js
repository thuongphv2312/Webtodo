import React,{useState} from 'react';
const InputForm = (props) => {
  const [task, setTask] = useState('');
  return (
    <div>
      <input type='text' onChange={(e) => setTask(e.target.value)} value={task} />
      <button type='button' onClick={()=>props.onSubmit(task)}>Add</button>
    </div>
  );
}
export default InputForm;
