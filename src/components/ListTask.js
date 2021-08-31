import  {configureStore} from '@reduxjs/toolkit';
import Reducer from './Task';
export default configureStore({
    reducer :{
        todos: Reducer
    }
});

