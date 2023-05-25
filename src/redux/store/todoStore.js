import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../slices/todoSlice'

export const TodoStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
})
