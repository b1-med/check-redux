import ReactDOM from 'react-dom';
import Input from "./components/Addtask";
import './App.css';
import TodoItem from "./components/todoitem";
import {useSelector} from 'react-redux';
import { selectTodos } from "./components/Task";
import {useState} from 'react';
function App() {
  const Todolist =useSelector(selectTodos);
  const [state, setstate] = useState(TodoItem.description)
    const Filter = () =>{
    }
    
    
    
    
  
  return (
    <div className="App">
      <div className="container">
        <div className='todo-container' id='list'> 
        {
          Todolist.map(item =>( 
            <TodoItem 
            name={item.description}
            done={item.Done}
            Id={item.Id} />

          ))
        }

        </div>
      <Input/>
      </div>
      <button onClick={Filter}>filter</button>
    </div>
  );
}

export default App;
