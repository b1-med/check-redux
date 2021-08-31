import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useDispatch } from 'react-redux';
import Todolist from './Task';
import { useState} from 'react';
import {useSelector }from 'react-redux'

const TodoItem = ({name,Done,Id}) => {
  const [done, setDone] = useState(true)
  let todos = useSelector(state => state.todos);
  console.log('hoo',todos);
  const handleChange =()=>{
    setDone(!done)
    console.log(done)
  }
    const changeEditMode=()=>{
        
        console.log('run')
    }
    return (
        <div className='todo-container1'> 
        <FormControlLabel
      control={<Checkbox checked={done} onChange={handleChange} />}
      label=""
    />
            <h6 onDoubleClick={changeEditMode}>{name} </h6>
            <br />   
        </div>
        
    )
}

export default TodoItem;


