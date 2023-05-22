import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../slices/todoSlice'

export const TodoStore = configureStore({
  reducer: {
    todo: todoSlice,
  },
})
