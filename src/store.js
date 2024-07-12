import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './Reducer/todoSlider';

export default configureStore({
  reducer: {
    toDo:toDoReducer,
  }
})