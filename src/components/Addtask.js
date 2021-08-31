import {React,useState} from 'react';
import {useDispatch} from 'react-redux';
import { savetodo } from './Task';
const Input  = () => {
    const style={ paddingTop:'9px',
        paddingRight:'32pc',
        borderRadius:"5px"}
        const style1={paddingTop:'9px',borderRadius:"5px",marginTop:'-16pc'}
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addTodo=()=>{
        dispatch(savetodo({
            description : input,
            Done: false,
            Id: Date.now()
        }))
    }
    return (
        <div className="input" > 
            <input style={style} type="type to add" value={input} onChange={e=> setInput(e.target.value)} />
            <button style={style1} onClick={addTodo}>click to add</button>
        </div>
    )
}

export default Input ;
